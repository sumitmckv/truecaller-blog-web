import {Base} from '@/models/base';

export interface Category extends Base {
  slug: string;
  description?: string;
}

export interface GetCategoriesResponse {
  categories: Category[];
  found: number;
}
