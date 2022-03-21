<template lang="pug">
  .rating-wrapper
    .rating-inner
      .rating
        .rating-item(v-for="i in 5" :key="i")
          img(src="@/assets/star.png" width='15px' v-if="i <= averageRating" )
          img(src="@/assets/star-outline.png" width='15px' v-else)
      .rating-total {{ ratingsCount }} Ratings
</template>

<script>
export default {
  name: 'Rating',
  props: {
    averageRating: {
      type: Number,
      default: 0,
    },
    ratingsCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="sass">
@import '@/views/pages/books/styles/rating.sass'
</style>
