<template lang="pug">
  div
    .book-filter__lead Sort
    .book-filter
      button.btn(@click="handlerSortBooks") Published date
      button.btn(@click="handlerSortBooksByRating") Rating
      button.btn(
        @click="clearFilter(true)"
      ) Show all
      button.btn(
        @click="clearFilter(false)"
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
    clearFilter(reset) {
      const search = this.$route.query.search || 'Stephen king novels';
      let limit = 8;

      if (reset) limit = 40;

      this.$router.push({
        name: 'BooksPage',
        query: {
          search,
          page: 1,
          limit,
        },
      });
    },
  },
};
</script>

<style scoped lang="sass">
@import '@/views/pages/books/styles/filter.sass'
</style>
