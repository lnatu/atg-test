<template lang="pug">
  div
    .book-filter__lead Sort
    .book-filter
      button.btn(@click="handlerSortBooks") Published date
      button.btn(@click="handlerSortBooksByRating") Rating
      button.btn(
        @click="void $router.push({ name: 'BooksPage', query: { page: 1, limit: 40 } })"
      ) Show all
      button.btn(
        @click="void $router.push({ name: 'BooksPage', query: { page: 1, limit: 8 } })"
      ) Clear filter
</template>

<script>
import useBook from '@/hooks/useBook';
import { sortBookByDate, sortBookByRating } from '@/helpers/books';

export default {
  name: 'Filters',
  setup() {
    const {
      books,
      SET_BOOKS,
    } = useBook();
    return {
      books,

      // hooks
      SET_BOOKS,
    };
  },
  methods: {
    handlerSortBooks() {
      const results = sortBookByDate([...this.books]);
      this.SET_BOOKS(results);
    },
    handlerSortBooksByRating() {
      const results = sortBookByRating([...this.books]);
      this.SET_BOOKS(results);
    },
  },
};
</script>

<style scoped lang="sass">
@import '@/views/pages/books/styles/filter.sass'
</style>
