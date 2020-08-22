import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Detail from '@/views/Detail.vue';
import CategoryPosts from '@/views/CategoryPosts.vue';
import TagPosts from '@/views/TagPosts.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:slugId',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/category/:slugId',
    name: 'Category Posts',
    component: CategoryPosts,
    props: true,
  },
  {
    path: '/tag/:slugId',
    name: 'Tag Posts',
    component: TagPosts,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
