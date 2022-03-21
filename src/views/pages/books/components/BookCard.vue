<template lang="pug">
  .book-card
    .book-card__cover
      figure
        .book-card__thumb
          img(:src="bookThumb")
        figcaption.book-card__caption {{ bookName }}
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    bookName: {
      type: String,
      required: true,
    },
    bookThumb: {
      type: String,
      required: true,
    },
  },
};
</script>
