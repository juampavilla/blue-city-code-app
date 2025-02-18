import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateHtmlPipe } from '../../../pipes/truncate-html.pipe';
import { ShortDatePipe } from '../../../pipes/short-date.pipe';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { MediumPost } from '../../../model/mediumPosts';
import { MediumPostsService } from '../../../services/medium-posts.service';


@Component({
  selector: 'app-medium-posts',
  standalone: true,
  imports: [CommonModule, ShortDatePipe, TruncateHtmlPipe, TruncatePipe],
  templateUrl: './medium-posts.component.html',
  styleUrl: './medium-posts.component.scss'
})
export class MediumPostsComponent implements OnInit {
  
  posts: MediumPost[] = [];

  constructor(private mediumPostsService: MediumPostsService) { 
    //this.mainPost = new MediumPost
  }

  ngOnInit(): void {
    this.checkColumnLayout();
   

    this.mediumPostsService.getPosts({ mediumUser: '@juampavilla', skip: 0, take: 10 }).subscribe({
      next: (data: MediumPost[]) => {
        this.posts = data;
      },
      error: (err: any) => {
        console.error('API error:', err);
      }
    });
  }

  truncateText(text: string, maxLength: number = 300): string {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  isSingleColumn = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkColumnLayout();
  }

  checkColumnLayout() {
    const width = window.innerWidth;
    this.isSingleColumn = width < 768;
  }
}