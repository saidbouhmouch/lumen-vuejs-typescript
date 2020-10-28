import Vue from 'vue';
import AppPage from './app.vue'
import router from './route'
new Vue({
  el: '#app',
  name:"app",
  components: {
    AppPage
  },
  router,
});

