<template lang="pug">
  section.books
    .container
      .books-top
        .books-title Welcome to my Book Store

        filter-book

        input.input(placeholder='Search' v-model="query" @keydown.enter="searchBooks")

      .books-grid
        .loading(v-if="loading" :key="1")
          img(src='@/assets/loading.gif')

        div(v-else :key="2")

          div(v-if="$route.query.search") {{ $route.query.search }}
          .mt-1(v-if="books.length === 0") Can't find any documents 😂😂😂

          book-list(:books="books")

        pagination(:size="totalPage" v-if="books.length < 40 && books.length !== 0")
</template>

<script>
import { ref } from '@vue/composition-api';

// Hooks
import useBook from '@/hooks/useBook';

// Components
import BookList from '@/views/pages/books/components/BookList.vue';
import FilterBook from '@/views/pages/books/components/Filter.vue';
import Pagination from '@/views/pages/books/components/Pagination.vue';

export default {
  name: 'Books',
  components: {
    BookList,
    FilterBook,
    Pagination,
  },
  setup() {
    const query = ref('');
    const loading = ref(false);
    const limit = ref(40);
    const perPage = ref(8);
    const totalPage = limit.value / perPage.value;

    const {
      books,
      fetchBooks,
    } = useBook();

    return {
      // data
      query,
      books,
      loading,
      totalPage,

      // hooks
      fetchBooks,
    };
  },
  async created() {
    await this.getBooks();
  },
  methods: {
    async getBooks(queryParams) {
      let limit;
      let page;
      let query;

      if (queryParams) {
        limit = +queryParams.query.limit;
        page = +queryParams.query.page;
        query = queryParams.query.search;
      } else {
        limit = +this.$route.query.limit;
        page = +this.$route.query.page;
        query = this.$route.query.search;
      }

      this.loading = true;

      try {
        await this.fetchBooks({
          query: query || 'Stephen King novels',
          page: page || 1,
          perPage: limit || 8,
        });
        this.loading = false;
      } catch (err) {
        this.loading = false;
      }
    },
    searchBooks() {
      this.$router.push({
        name: 'BooksPage',
        query: {
          search: this.query,
          page: 1,
          perPage: 8,
        },
      });

      this.query = '';
    },
  },
  watch: {
    async $route(newVal) {
      await this.getBooks(newVal);
    },
  },
};
</script>

<style lang="sass">
@import '@/sass/pages/books/books.sass'
</style>
