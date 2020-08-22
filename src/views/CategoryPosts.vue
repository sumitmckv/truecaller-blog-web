<template>
  <div v-if="posts">
    <div v-for="(post, index) in posts" :key="index">
      <blog-summary-card :post="post" />
    </div>
    <older-post @increment-page="loadOldPosts" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Post, PostRequest} from '@/models/post';
import {namespace} from 'vuex-class';
import BlogSummaryCard from '../components/BlogSummaryCard.vue';
import OlderPost from '@/components/OlderPost.vue';
const blog = namespace('blog');
@Component({
  components: {OlderPost, BlogSummaryCard},
})
export default class CategoryPosts extends Vue {
  @blog.State
  private posts!: Post[];

  @blog.Action
  private fetchPosts!: (req: PostRequest) => Promise<void>;

  mounted() {
    this.fetchPosts({category: this.$attrs.slugId});
  }

  private loadOldPosts(page: number) {
    this.fetchPosts({page, category: this.$attrs.slugId});
  }
}
</script>
