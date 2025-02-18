import { Component } from '@angular/core';
import { MediumPost } from '../../../model/mediumPosts';
import { ShortDatePipe } from "../../../pipes/short-date.pipe";

@Component({
  selector: 'app-main-blog',
  standalone: true,
  imports: [ ShortDatePipe],
  templateUrl: './main-blog.component.html',
  styleUrl: './main-blog.component.scss'
})
export class MainBlogComponent {

  public mainPost: MediumPost;

  constructor() {
    this.mainPost = {
      title: "My Blog",
      url: "",
      imageUrl: "",
      excerpt: "These are my posts. I hope you enjoy them as much as I enjoy writing them :)",
      publishedAt: new Date(),
      categoryList: []
    };    
  }
}
