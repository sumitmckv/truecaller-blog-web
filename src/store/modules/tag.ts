import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {GetTagsResponse} from '@/models/tag';
import {tag} from '@/api';
import {Base} from '@/models/base';

@Module({namespaced: true})
export default class Tag extends VuexModule {
  public tags: Base[] = [];

  @Mutation
  public setTags(tags: Base[]): void {
    this.tags = tags;
  }

  @Action
  public async fetchTags(): Promise<void> {
    const res: GetTagsResponse = await tag.getTags();
    this.context.commit('setTags', res.tags);
  }
}
