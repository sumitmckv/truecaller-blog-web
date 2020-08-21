import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {BlogResponse} from '@/models/blog';
import {blog} from '@/api';

@Module({namespaced: true})
export default class Blog extends VuexModule {
  private blogs: Blog[] = [];

  @Mutation
  public setBlogs(blogs: Blog[]): void {
    this.blogs = blogs;
  }

  @Action
  public async fetchBlogs(number: number, page: number): Promise<void> {
    const res: BlogResponse = await blog.getBlogs(number, page);
    this.context.commit('setBlogs', res.posts);
  }
}
