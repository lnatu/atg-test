<template lang="pug">
  .row
    .col-3.col-lg-6.col-md-12(v-for="book in books" :key="book.id")
      router-link.h-100(:to="{ name: 'BookPage', params: { id: book.id } }")
        book-card(
          :bookThumb="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://picsum.photos/400/400'"
          :bookName="book.volumeInfo.title"
          :publishedDate="book.volumeInfo.publishedDate"
          :averageRating="book.volumeInfo.averageRating || 0"
          :ratingsCount="book.volumeInfo.ratingsCount || 0"
        )
</template>

<script>
import BookCard from '@/views/pages/books/components/BookCard.vue';

export default {
  name: 'BookList',
  components: {
    BookCard,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
