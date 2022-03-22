<template lang="pug">
  .book-card
    .book-card__cover
      figure
        .book-card__thumb
          img(:src="bookThumb")
        figcaption.book-card__caption {{ bookName }}
        .book-card__date {{ publishedDate }}
    rating(:ratingsCount="ratingsCount" :averageRating="averageRating")
</template>

<script>
import Rating from '@/views/pages/books/components/Rating.vue';

export default {
  name: 'BookCard',
  components: {
    Rating,
  },
  props: {
    bookName: {
      type: String,
      required: true,
    },
    bookThumb: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    averageRating: {
      type: Number,
      required: true,
    },
    ratingsCount: {
      type: Number,
      required: true,
    },
  },
};
</script>
