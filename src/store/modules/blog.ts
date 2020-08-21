import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {Post, GetPostsResponse, PostDetail} from '@/models/post';
import {blog} from '@/api';

@Module({namespaced: true})
export default class Blog extends VuexModule {
  public posts: Post[] = [];
  public postDetail: PostDetail = {} as PostDetail;

  @Mutation
  public setPosts(posts: Post[]): void {
    this.posts = posts;
  }

  @Mutation
  public setPostDetail(postDetail: PostDetail): void {
    this.postDetail = postDetail;
  }

  @Action
  public async fetchPosts(number: number, page: number): Promise<void> {
    const res: GetPostsResponse = await blog.getPosts(number, page);
    this.context.commit('setPosts', res.posts);
  }

  @Action
  public async fetchPostBySlug(slugId: string): Promise<void> {
    const res: PostDetail = await blog.getBlogBySlug(slugId);
    this.context.commit('setPostDetail', res);
  }
}
