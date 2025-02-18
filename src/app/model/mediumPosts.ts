export interface MediumPost {
    title: string;
    url: string;
    imageUrl: string;
    excerpt: string;
    publishedAt: Date;
    categoryList: string[];
  }

  export interface TruncateState {
    truncatedHtml: string;
    charCount: number;
  }