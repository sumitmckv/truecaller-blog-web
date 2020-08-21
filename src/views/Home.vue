<template>
  <div>
    <div v-for="(blog, index) in blogs" :key="index">
      <blog-summary-card :blog="blog" />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import BlogSummaryCard from '@/components/BlogSummaryCard.vue';
import {namespace} from 'vuex-class';
const blog = namespace('blog');

@Component({
  components: {
    BlogSummaryCard,
  },
})
export default class Home extends Vue {
  @blog.State
  private blogs: Blogs[];

  @blog.Action
  private fetchBlogs: (number: number, page: number) => void;

  mounted() {
    this.fetchBlogs();
  }
}
</script>
