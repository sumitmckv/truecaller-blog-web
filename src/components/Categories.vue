<template>
  <div v-if="categories" class="mt-5 transform px-2">
    <h5 class="text-blue-500 flex px-5 pb-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
      </svg>
      <span class="ml-2 font-semibold text-sm tracking-wide">
        Categories
      </span>
    </h5>
    <list :items="categories" origin="category" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
import {Category} from '@/models/category';
import List from '@/components/List.vue';
const category = namespace('category');
@Component({
  components: {List},
})
export default class Categories extends Vue {
  @category.State
  private categories!: Category[];

  @category.Action
  private fetchCategories!: () => Promise<void>;

  mounted() {
    this.fetchCategories();
  }
}
</script>
