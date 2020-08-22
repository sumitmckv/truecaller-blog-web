import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {Post, GetPostsResponse, PostDetail, PostRequest} from '@/models/post';
import {blog} from '@/api';

@Module({namespaced: true})
export default class Blog extends VuexModule {
  public posts: Post[] = [];
  public postDetail: PostDetail = {} as PostDetail;
  public relatedPosts: Post[] = [];
  private found = 0;
  private baseRequest: PostRequest = {
    number: 25,
    page: 1,
  };

  @Mutation
  public setPosts(posts: Post[]): void {
    this.posts.push(...posts);
  }

  @Mutation
  public setFound(found: number): void {
    this.found = found;
  }

  @Mutation
  public setPostDetail(postDetail: PostDetail): void {
    this.postDetail = postDetail;
  }

  @Mutation
  public setRelatedPosts(posts: Post[]): void {
    this.relatedPosts.push(...posts);
  }

  @Action
  public async fetchPosts(req: PostRequest): Promise<void> {
    const res: GetPostsResponse = await blog.getPosts(
      Object.assign(this.baseRequest, req)
    );
    this.context.commit('setPosts', res.posts);
    this.context.commit('setFound', res.found);
  }

  @Action
  public async fetchPostBySlug(slugId: string): Promise<void> {
    const res: PostDetail = await blog.getPostBySlug(slugId);
    this.context.commit('setPostDetail', res);
  }

  @Action
  public async fetchRelatedPosts(id: number): Promise<void> {
    const res = await blog.getRelatedPosts(id);
    this.context.commit('setRelatedPosts', res);
  }
}
