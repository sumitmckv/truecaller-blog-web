import {get} from './base';
import {GetPostsResponse, PostDetail, PostRequest} from '@/models/post';
import {GetCategoriesResponse} from '@/models/category';
import {GetTagsResponse} from '@/models/tag';

export const blog = {
  getPosts: (req: PostRequest): Promise<GetPostsResponse> => {
    const category = req.category ? `&category=${req.category}` : '';
    const tag = req.tag ? `&tag=${req.tag}` : '';
    const fields =
      '&fields=ID,slug,title,post_thumbnail,excerpt,date,author,categories';
    return get(
      `posts/?number=${req.number}&page=${req.page}${category}${tag}${fields}&order_by=date`
    ).json();
  },
  getPostBySlug: (slugId: string): Promise<PostDetail> => {
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
