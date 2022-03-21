<template lang="pug">
  .pagination
    ul.pagination-list
      li.pagination-item(v-for="s in size" :key="s")
        router-link.pagination-link(
          exact
          active-class="active"
          :to="{ name: 'BooksPage', query: { page: s, limit: 8 } }"
        ) {{ s }}
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    size: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped lang="sass">
@import '@/views/pages/books/styles/pagination.sass'
</style>
