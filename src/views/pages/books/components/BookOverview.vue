<template lang="pug">
  figure.book-figure
    a.btn(href="#" @click.prevent="$router.back()") BACK
    .row
      .col-3.col-lg-12
        .book-thumb
          img(:src="info.imageLinks.thumbnail")
      .col-9.col-lg-12
        figcaption.book-caption
          .book-author {{ info.authors[0] }}

          .book-name {{ info.title }}

          rating(
            :averageRating="info.averageRating"
            :ratingsCount="info.ratingsCount"
          )

          .book-categories
            .book-categories__lead Categories
            .book-categories__wrapper
              .book-categories__name(v-for="category in info.categories")
                span {{ category }}

          .book-desc(v-html="info.description")
</template>

<script>
import Rating from '@/views/pages/books/components/Rating.vue';

export default {
  name: 'BookOverview',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  components: {
    Rating,
  },
};
</script>

<style scoped>

</style>
