import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {Post, GetPostsResponse, PostDetail, PostRequest} from '@/models/post';
import {blog} from '@/api';

@Module({namespaced: true})
export default class Blog extends VuexModule {
  public posts: Post[] = [];
  public postDetail: PostDetail = {} as PostDetail;
  private baseRequest: PostRequest = {
    number: 25,
    page: 1,
  };

  @Mutation
  public setPosts(posts: Post[]): void {
    this.posts = posts;
  }

  @Mutation
  public setPostDetail(postDetail: PostDetail): void {
    this.postDetail = postDetail;
  }

  @Action
  public async fetchPosts(req: PostRequest): Promise<void> {
    const res: GetPostsResponse = await blog.getPosts(
      Object.assign(this.baseRequest, req)
    );
    this.context.commit('setPosts', res.posts);
  }

  @Action
  public async fetchPostBySlug(slugId: string): Promise<void> {
    const res: PostDetail = await blog.getPostBySlug(slugId);
    this.context.commit('setPostDetail', res);
  }
}
