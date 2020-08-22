import {Base} from '@/models/base';

export interface GetTagsResponse {
  tags: Base[];
  found: number;
}
