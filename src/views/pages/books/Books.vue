<template lang="pug">
  section.books
    .container
      .books-title Stephen King novels

      .books-grid
        .loading(v-if="loading" :key="1")
          img(src='@/assets/loading.gif')

        div(v-else :key="2")
          book-list(:books="books")

        pagination(:size="totalPage")
</template>

<script>
import { ref } from '@vue/composition-api';

// Hooks
import useBook from '@/hooks/useBook';

// Components
import BookList from '@/views/pages/books/components/BookList.vue';
import Pagination from '@/views/pages/books/components/Pagination.vue';

export default {
  name: 'Books',
  components: {
    BookList,
    Pagination,
  },
  setup() {
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

      if (queryParams) {
        limit = +queryParams.query.limit;
        page = +queryParams.query.page;
      } else {
        limit = +this.$route.query.limit;
        page = +this.$route.query.page;
      }


      this.loading = true;

      await this.fetchBooks({
        page: page || 0,
        perPage: limit || 8,
      });

      this.loading = false;
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
