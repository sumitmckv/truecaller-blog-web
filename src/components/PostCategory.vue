<template>
  <div v-if="categories">
    <a
      :href="`/category/${category.slug}`"
      v-for="(category, index) in categoryList"
      :key="index"
      class="inline-block bg-blue-100 text-blue-600 text-xs px-2 rounded-md font-semibold capitalize tracking-wide mr-1"
      >{{ category.name }}</a
    >
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Category} from '@/models/category';

@Component
export default class PostCategory extends Vue {
  @Prop()
  private categories!: Map<string, Category>;
  get categoryList(): Category[] {
    if (this.categories) {
      return Object.values(this.categories).map(value => value);
    }
    return [];
  }
}
</script>
