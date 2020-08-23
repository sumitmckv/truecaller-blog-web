<template>
  <div v-if="relatedPosts">
    <h5 class="text-1xl font-semibold text-gray-800">You might also like</h5>
    <div
      v-for="(post, index) in relatedPosts"
      :key="index"
      class="flex max-w-2xl h-20 w-full my-3 bg-white shadow-md rounded-sm overflow-hidden mx-auto"
    >
      <div class="w-20 bg-gray-800">
        <a :href="`/${post.slug}`">
          <img
            v-if="post.post_thumbnail"
            class="w-full h-full object-center"
            :src="post.post_thumbnail.URL"
            alt="Article"
          />
        </a>
      </div>

      <div class="flex px-2 py-3">
        <div class="mx-3">
          <a
            :href="`/${post.slug}`"
            class="block text-sm tracking-wide text-gray-800 font-semibold mt-2 hover:text-gray-600 hover:underline"
            ><span v-html="post.title"></span>
          </a>
          <post-category :categories="post.categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {Post} from '@/models/post';
import PostInfo from '@/components/PostInfo.vue';
import PostCategory from '@/components/PostCategory.vue';
const blog = namespace('blog');
@Component({
  components: {PostCategory, PostInfo},
})
export default class RelatedPosts extends Vue {
  @blog.State
  private relatedPosts!: Post[];
}
</script>
