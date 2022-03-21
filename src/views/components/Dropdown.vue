<template lang="pug">
  .dropdown
    button.btn(@click="state = !state") Sort
    .dropdown-inner(v-if="state")
      slot

</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Dropdown',
  setup() {
    const state = ref(false);

    return {
      state
    };
  }
};
</script>

<style scoped>

</style>
