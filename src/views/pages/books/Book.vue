<template lang="pug">
  .container
    .loader(v-if="loading" )
      img(src='@/assets/loading.gif' width='200px')

    div(v-else)
      .not-found(v-if="!book")
        div NOT FOUND 🤣
        a.btn(href="#" @click.prevent="$router.back()") BACK


      .book(v-else)
        .book-overview
          book-overview(:info="book.volumeInfo")

        book-detail(:info="book.volumeInfo")

</template>

<script>
import { ref } from '@vue/composition-api';
import useBook from '@/hooks/useBook';
import BookDetail from '@/views/pages/books/components/BookDetail.vue';
import BookOverview from '@/views/pages/books/components/BookOverview.vue';

export default {
  name: 'Book',
  components: {
    BookDetail,
    BookOverview,
  },
  setup() {
    const loading = ref(false);
    const {
      book,
      fetchBook,
    } = useBook();

    return {
      // data
      book,
      loading,

      // hooks
      fetchBook,
    };
  },
  async created() {
    this.loading = true;
    try {
      await this.fetchBook(this.$route.params.id);
      this.loading = false;
    } catch (err) {
      this.loading = false;
    }
  },
};
</script>

<style lang="sass">
@import '@/views/pages/books/styles/book.sass'
</style>
