import {Base} from '@/models/base';

export interface Tag extends Base {
  slug: string;
}

export interface GetTagsResponse {
  tags: Tag[];
  found: number;
}
