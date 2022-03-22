<template lang="pug">
  .pagination
    ul.pagination-list
      li.pagination-item(v-for="s in size" :key="s")
        router-link.pagination-link(
          exact
          active-class="active"
          :class='{active: s === +$route.query.page}'
          :to="path(s)"
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
  setup(_, { root }) {
    const path = page => ({
      name: 'BooksPage',
      query: {
        page,
        limit: 8,
        search: root.$route.query.search || 'Stephen King novels',
      },
    });

    return {
      path,
    };
  },
};
</script>

<style scoped lang="sass">
@import '@/views/pages/books/styles/pagination.sass'
</style>
