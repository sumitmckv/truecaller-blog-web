<template>
  <div
    v-if="post"
    class="max-w-2xl mx-2 md:mx-auto my-5 bg-white overflow-hidden shadow-md rounded-md"
  >
    <img
      class="w-full h-full object-cover"
      :src="post.post_thumbnail.URL"
      alt="Article"
    />

    <div class="p-6">
      <div>
        <post-category :categories="post.categories" />
        <a
          :href="post.slug"
          class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline"
          >{{ post.title }}
        </a>
        <post-info :author="post.author" :date="post.date" />
        <div class="text-sm text-gray-600 mt-2" v-html="post.excerpt"></div>
        <div class="flex justify-end items-center">
          <a
            :href="post.slug"
            class="text-blue-600 hover:text-blue-500 text-sm tracking-wider font-medium"
          >
            <div class="flex items-center">
              <span>Continue reading</span>
              <svg
                class="h-4 w-4 ml-1 fill-current text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M14 15.5V12H1V8h13V4.5l5.25 5.5L14 15.5z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Post} from '@/models/post';
import PostInfo from '@/components/PostInfo.vue';
import PostCategory from '@/components/PostCategory.vue';
@Component({
  components: {PostCategory, PostInfo},
})
export default class BlogSummaryCard extends Vue {
  @Prop()
  private post!: Post;
}
</script>
