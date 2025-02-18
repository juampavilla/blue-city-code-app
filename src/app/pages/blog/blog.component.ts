import { Svg, Symbol } from '../../model/svg';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItem } from '../../model/blogItem';
import { SvgComponent } from '../../utils/svg/svg.component';
import { MediumPostsComponent } from './medium-posts/medium-posts.component';
import { MainBlogComponent } from "./main-blog/main-blog.component";


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MediumPostsComponent, SvgComponent, MainBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private _blogList: BlogItem[] = [];
  private _SvgTag: Svg;

  // private mockData(): void {
  //   for (let i = 0; i < 2; i++) {
  //     let bItem = new BlogItem(`title${i}`,
  //       `description${i}`,
  //       `content${i}`,
  //       `link${i}`);
  //     this._blogList.push(bItem);
  //   }

  // }

  constructor() {
//    this.mockData();
    this._SvgTag = new Svg();
    const viewBox: string = "0 0 16 16";
    let chevronArrowSymbol = new Symbol("chevron-right", viewBox, ["M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"]);
    this._SvgTag.addSymbol(chevronArrowSymbol);


  }

  get BlogList(): BlogItem[] {
    return this._blogList;
  }

  get SvgTag(): Svg{
    return this._SvgTag;
  }
}

