<template>
  <div v-if="tags" class="mt-5 transform px-2">
    <h5 class="text-blue-500 flex px-5 pb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="h-5 w-5 fill-current"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"
        />
      </svg>
      <span class="ml-2 font-semibold text-sm tracking-wide">
        Tags
      </span>
    </h5>
    <list :items="tags" origin="tag" />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import List from '@/components/List.vue';
import {namespace} from 'vuex-class';
import {Base} from '@/models/base';
const tag = namespace('tag');
@Component({
  components: {List},
})
export default class Tags extends Vue {
  @tag.State
  private tags!: Base[];

  @tag.Action
  private fetchTags!: () => Promise<void>;

  mounted() {
    this.fetchTags();
  }
}
</script>

<style scoped></style>
