import '@/sass/base/global.sass';

import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
