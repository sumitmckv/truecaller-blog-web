import Vue from 'vue';
import Vuex from 'vuex';
import blog from '@/store/modules/blog';
import category from '@/store/modules/category';
import tag from '@/store/modules/tag';
import loader from '@/store/modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {blog, category, tag, loader},
});
