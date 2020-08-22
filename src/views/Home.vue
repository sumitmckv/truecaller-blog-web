<template>
  <div>
    <loader />
    <div v-if="posts">
      <div v-for="(post, index) in posts" :key="index">
        <blog-summary-card :post="post" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BlogSummaryCard from '@/components/BlogSummaryCard.vue';
import {Post} from '@/models/post';
import {namespace} from 'vuex-class';
import Loader from '@/components/Loader.vue';
const blog = namespace('blog');

@Component({
  components: {
    Loader,
    BlogSummaryCard,
  },
})
export default class Home extends Vue {
  @blog.State
  private posts!: Post[];

  @blog.Action
  private fetchPosts!: (number?: number, page?: number) => Promise<void>;

  mounted() {
    this.fetchPosts();
  }
}
</script>
