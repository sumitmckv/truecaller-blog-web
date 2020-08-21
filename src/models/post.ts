import {Category} from '@/models/category';

export interface Post {
  ID: number;
  slug: string;
  title: string;
  date: Date;
  excerpt: string;
  post_thumbnail: PostThumbnail;
  author: Author;
  categories: Map<string, Category>;
}

export interface PostDetail extends Post {
  content: string;
}

export interface GetPostsResponse {
  posts: Post;
  meta: any;
  found: number;
}

export interface Author {
  name: string;
}
export interface PostThumbnail {
  ID: string;
  URL: URL;
}
