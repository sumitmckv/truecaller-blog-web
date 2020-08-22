<template>
  <div v-if="postDetail">
    <div class="max-w-2xl my-5 mx-2 md:mx-auto">
      <img
        v-if="postDetail.post_thumbnail"
        class="w-full h-full object-cover"
        :src="postDetail.post_thumbnail.URL"
        alt="Article"
      />
      <div class="pt-5">
        <post-category :categories="postDetail.categories" />
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
import PostInfo from '@/components/PostInfo.vue';
import PostCategory from '@/components/PostCategory.vue';
const blog = namespace('blog');
@Component({
  components: {PostCategory, PostInfo},
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
