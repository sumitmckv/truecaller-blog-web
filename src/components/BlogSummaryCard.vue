<template>
  <div
    v-if="blog"
    class="max-w-2xl mx-2 md:mx-auto my-10 bg-white overflow-hidden shadow-md rounded-md"
  >
    <img
      class="w-full h-64 object-cover"
      :src="blog.post_thumbnail.URL"
      alt="Article"
    />

    <div class="p-6">
      <div>
        <span class="text-blue-600 text-xs font-medium uppercase">Product</span>
        <a
          :href="blog.URL"
          class="block text-gray-800 font-semibold text-2xl mt-2 hover:text-gray-600 hover:underline"
          >{{ blog.title }}</a
        >
        <div class="text-sm text-gray-600 mt-2" v-html="blog.excerpt"></div>
      </div>

      <div class="mt-4">
        <div class="flex items-center">
          <div class="flex items-center">
            <img
              class="h-10 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
              alt="Avatar"
            />
            <a href="#" class="mx-2 text-gray-700 font-semibold">Jone Doe</a>
          </div>
          <span class="mx-1 text-gray-600 text-xs">{{ blog.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Blog} from '@/models/blog';

@Component
export default class BlogSummaryCard extends Vue {
  @Prop()
  private blog: Blog | undefined;
}
</script>

<style scoped></style>
