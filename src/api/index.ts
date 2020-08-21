import {get} from './base';
import {GetPostsResponse, PostDetail} from '@/models/post';

export const blog = {
  getPosts: (number = 25, page = 1): Promise<GetPostsResponse> => {
    return get(
      `posts/?number=${number}&order_by=date&page=${page}&fields=ID,slug,title,post_thumbnail,excerpt,date,author,categories`
    ).json();
  },
  getBlogBySlug: (slugId: string): Promise<PostDetail> => {
    return get(`posts/slug:${slugId}`).json();
  },
};
