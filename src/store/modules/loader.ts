import {Module, Mutation, VuexModule} from 'vuex-module-decorators';

@Module({namespaced: true})
export default class Loader extends VuexModule {
  public loading = false;

  @Mutation
  public startLoading() {
    this.loading = true;
  }

  @Mutation
  public endLoading() {
    this.loading = false;
  }
}
