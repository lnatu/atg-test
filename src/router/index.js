import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/pages/home/Home'),
  },
  {
    path: '/books',
    name: 'BooksPage',
    component: () => import('@/views/pages/books/Books'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
