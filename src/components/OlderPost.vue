<template>
  <div class="flex items-center justify-center" v-if="found && found > 25">
    <button
      v-if="loading"
      class="bg-blue-500 py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400 my-10"
    >
      <span class="flex items-center text-white">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        Loading...
      </span>
    </button>
    <button
      v-else
      @click="incrementPage"
      class="bg-blue-500 py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400 my-10"
    >
      <span class="flex items-center">
        Older posts
        <svg
          class="h-4 w-4 ml-1 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14 15.5V12H1V8h13V4.5l5.25 5.5L14 15.5z" />
        </svg>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator';
import {namespace} from 'vuex-class';
const loader = namespace('loader');
const blog = namespace('blog');

@Component
export default class OlderPost extends Vue {
  private page = 1;

  @blog.State
  private found!: number;

  @loader.State
  private loading!: boolean;

  @Emit()
  incrementPage(): number {
    this.page += 1;
    return this.page;
  }
}
</script>
