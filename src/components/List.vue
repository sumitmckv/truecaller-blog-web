<template>
  <div v-if="items">
    <div
      class="z-20 relative bg-white px-5 py-3"
      v-for="(item, index) in items"
      :key="index"
    >
      <a
        :href="`/${origin}/${item.slug}`"
        class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-blue-100 transition duration-150"
      >
        <div class="space-y-1">
          <p
            class="font-semibold font text-gray-900 hover:text-blue-900 text-xs uppercase"
          >
            {{ item.name }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Base} from '@/models/base';

@Component
export default class List extends Vue {
  @Prop()
  private items!: Base[];

  @Prop()
  private origin!: string;
}
</script>
