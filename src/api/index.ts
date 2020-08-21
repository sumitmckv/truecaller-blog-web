import {get} from './base';
import {BlogResponse} from '@/models/blog';

export const blog = {
  getBlogs: (number = 25, page = 1): Promise<BlogResponse> => {
    //change any
    return get(
      `posts/?number=${number}&order_by=date&page=${page}&fields=ID,URL,title,post_thumbnail,excerpt,date`
    ).json();
  },
};
