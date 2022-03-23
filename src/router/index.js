import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/pages/home/Home.vue'),
  },
  {
    path: '/books',
    name: 'BooksPage',
    component: () => import('@/views/pages/books/Books.vue'),
  },
  {
    path: '/book/:id',
    name: 'BookPage',
    component: () => import('@/views/pages/books/Book.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
