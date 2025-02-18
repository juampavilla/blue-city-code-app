import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MediumPost } from '../model/mediumPosts';
import { GetPostsParams } from '../model/params';
import { XMLParser } from 'fast-xml-parser';


export interface MediumFeed {
  rss: {
    channel: {
      title: string;
      item: {
        title: string;
        link: string;
        'content:encoded'?: string; // Contenido completo del post
        pubDate?: string; // Fecha de publicación
        category?: string | string[]; // Categorías
      }[];
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class MediumPostsService {

  constructor(private http: HttpClient) { }


  getMediumFeed(): Observable<MediumFeed> {
    //const url = '/medium/feed/@juampavilla'; // with proxy
    const url = '/.netlify/functions/mediumProxy/feed/@juampavilla'; //netlify functions
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((xml) => {
        const parser = new XMLParser();
        return parser.parse(xml) as MediumFeed;
      })
    );
  }

  getPosts(paramsObj: GetPostsParams): Observable<MediumPost[]> {
    return this.getMediumFeed().pipe(
      map((data) => {
        return data.rss.channel.item.map((item) => {
          const imageUrl = this.extractImageUrl(item['content:encoded'] || '');
          const excerpt = this.extractExcerpt(item['content:encoded'] || '');
          const publishedAt = item.pubDate ? new Date(item.pubDate) : new Date();
          const categoryList = this.extractCategories(item.category);
          return {
            title: item.title,
            url: item.link,
            imageUrl, // Imagen extraída
            excerpt, // Extracto extraído
            publishedAt, // Fecha de publicación
            categoryList, // Lista de categorías
          };
        });
      })
    );
  }
  
  private extractImageUrl(content: string): string {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : '';
  }

  
  private extractExcerpt(content: string): string {
    const textContent = content.replace(/<[^>]+>/g, ''); 
    return textContent.slice(0, 500) + '...'; 
  }
  
  private extractCategories(category: string | string[] | undefined): string[] {
    if (!category) return [];
    return Array.isArray(category) ? category : [category];
  }
}