export interface Blog {
  ID: number;
  URL: string;
  title: string;
  date: Date;
  excerpt: string;
  post_thumbnail: any;
}

export interface BlogResponse {
  posts: Blog;
  meta: any;
  found: number;
}
