<template lang="pug">
  .home
    .container
      figure
        img(src="@/assets/logo.svg" width="300px")

      .cta
        router-link(
          :to="{ name: 'BooksPage', query: { page: 1, limit: 8, search: 'Stephen King novels' } }"
        ) Visit Books page
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped lang="sass">
@import '@/views/pages/home/styles/home.sass'
</style>
