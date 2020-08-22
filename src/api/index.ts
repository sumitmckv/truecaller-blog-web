import {get} from './base';
import {GetPostsResponse, Post, PostDetail, PostRequest} from '@/models/post';
import {GetCategoriesResponse} from '@/models/category';
import {GetTagsResponse} from '@/models/tag';

export const blog = {
  getPosts: (req: PostRequest): Promise<GetPostsResponse> => {
    const category = req.category ? `&category=${req.category}` : '';
    const tag = req.tag ? `&tag=${req.tag}` : '';
    return get(
      `posts/?number=${req.number}&page=${req.page}${category}${tag}`
    ).json();
  },
  getPostBySlug: (slugId: string): Promise<PostDetail> => {
    return get(`posts/slug?slugId=${slugId}`).json();
  },
  getRelatedPosts: (postId: number): Promise<Post[]> => {
    return get(`posts/${postId}/related`).json();
  },
};

export const category = {
  getCategories: (): Promise<GetCategoriesResponse> => get('categories').json(),
};

export const tag = {
  getTags: (): Promise<GetTagsResponse> => get('tags').json(),
};
