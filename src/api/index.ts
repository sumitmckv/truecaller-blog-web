import {get} from './base';
import {GetPostsResponse, PostDetail} from '@/models/post';
import {GetCategoriesResponse} from '@/models/category';
import {GetTagsResponse} from '@/models/tag';

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

export const category = {
  getCategories: (): Promise<GetCategoriesResponse> => get('categories').json(),
};

export const tag = {
  getTags: (): Promise<GetTagsResponse> =>
    get('tags?number=10&order=DESC&order_by=count').json(),
};
