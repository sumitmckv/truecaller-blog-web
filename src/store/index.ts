import Vue from 'vue';
import Vuex from 'vuex';
import blog from '@/store/modules/blog';
import loader from '@/store/modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {blog, loader},
});
