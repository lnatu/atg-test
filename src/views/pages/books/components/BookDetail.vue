<template lang="pug">
  .book-detail
    .book-detail__lead BOOK DETAILS

    .book-detail__content
      .book-detail__info
        span Published Date:
        span {{ info.publishedDate }}

      .book-detail__info
        span Publisher:
        span {{ info.publisher }}

      .book-detail__info
        span Language:
        span {{ info.language }}

      .book-detail__info
        span Dimensions:
        div - Height - {{ info.dimensions.height || 'NA' }}
        div - Width - {{ info.dimensions.width || 'NA' }}
        div - Thickness - {{ info.dimensions.thickness || 'NA' }}

    a.btn(:href='info.previewLink' target='_blank') Preview
</template>

<script>
export default {
  name: 'BookDetail',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
