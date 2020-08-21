<template>
  <div v-if="postDetail">
    <div class="max-w-2xl mx-2 md:mx-auto">
      <img
        v-if="postDetail.post_thumbnail"
        class="w-full h-full object-cover"
        :src="postDetail.post_thumbnail.URL"
        alt="Article"
      />
      <div class="py-5">
        <span
          v-for="(category, index) in categories"
          :key="index"
          class="inline-block bg-blue-100 text-blue-600 text-xs px-2 rounded-md font-semibold capitalize tracking-wide mr-1"
          >{{ category }}
        </span>
        <h5 class="block text-gray-800 font-semibold text-3xl mt-2">
          {{ postDetail.title }}
        </h5>
        <post-info :author="postDetail.author" n :date="postDetail.date" />
        <div id="content" v-html="postDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {PostDetail} from '@/models/post';
import {namespace} from 'vuex-class';
import BlogSummaryCard from '@/components/BlogSummaryCard.vue';
import PostInfo from '@/components/PostInfo.vue';
const blog = namespace('blog');
@Component({
  components: {PostInfo, BlogSummaryCard},
})
export default class Detail extends Vue {
  @blog.State
  private postDetail!: PostDetail;

  @blog.Action
  private fetchPostBySlug!: (slugId: string) => Promise<void>;

  mounted() {
    if (this.$attrs.slugId) {
      this.fetchPostBySlug(this.$attrs.slugId);
    }
  }

  get categories() {
    if (this.postDetail?.categories) {
      return Object.values(this.postDetail.categories).map(value => value.name);
    }
    return [];
  }
}
</script>

<style>
#content p {
  @apply my-4;
  @apply text-gray-800;
  @apply text-sm;
  @apply tracking-wide;
  @apply font-medium;
  @apply text-justify;
}

#content img {
  @apply my-5;
}
</style>
