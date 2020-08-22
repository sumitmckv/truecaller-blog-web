import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {GetTagsResponse, Tag as TagDetail} from '@/models/tag';
import {tag} from '@/api';

@Module({namespaced: true})
export default class Tag extends VuexModule {
  public tags: TagDetail[] = [];

  @Mutation
  public setTags(tags: TagDetail[]): void {
    this.tags = tags;
  }

  @Action
  public async fetchTags(): Promise<void> {
    const res: GetTagsResponse = await tag.getTags();
    this.context.commit('setTags', res.tags);
  }
}
