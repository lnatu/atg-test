<template lang="pug">
  #app
    //img.logo(src="./assets/logo.svg")
    //h2 {{ msg }}
    router-view
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Technical Challenge',
    };
  },
};
</script>
