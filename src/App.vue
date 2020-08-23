<template>
  <div id="app">
    <app-header />
    <loader />
    <div class="md:flex">
      <div class="md:w-3/4">
        <router-view />
      </div>
      <div class="md:w-1/4">
        <categories />
        <tags />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import AppHeader from '@/components/AppHeader.vue';
import Categories from '@/components/Categories.vue';
import Loader from '@/components/Loader.vue';
import Tags from '@/components/Tags.vue';

@Component({
  components: {Tags, Loader, Categories, AppHeader},
})
export default class App extends Vue {}
</script>

<style src="./assets/app.css"></style>
