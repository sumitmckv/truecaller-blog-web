import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {
  Category as CategoryDetail,
  GetCategoriesResponse,
} from '@/models/category';
import {category} from '@/api';

@Module({namespaced: true})
export default class Category extends VuexModule {
  public categories: CategoryDetail[] = [];

  @Mutation
  public setCategories(categories: CategoryDetail[]): void {
    this.categories = categories;
  }

  @Action
  public async fetchCategories(): Promise<void> {
    const res: GetCategoriesResponse = await category.getCategories();
    this.context.commit('setCategories', res.categories);
  }
}
