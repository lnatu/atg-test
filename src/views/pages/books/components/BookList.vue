<template lang="pug">
  .row
    .col-3.col-lg-6.col-md-12(
      v-for="{ volumeInfo:{ imageLinks, title, publishedDate, averageRating, ratingsCount }, id } in books"
      :key="id"
    )
      router-link.h-100(:to="{ name: 'BookPage', params: { id } }")
        book-card(
          :bookThumb="imageLinks ? imageLinks.thumbnail : 'https://picsum.photos/400/400'"
          :bookName="title"
          :publishedDate="publishedDate || ''"
          :averageRating="averageRating || 0"
          :ratingsCount="ratingsCount || 0"
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
