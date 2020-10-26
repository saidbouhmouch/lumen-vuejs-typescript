import Vue from 'vue';
import Welcome from './welcome.component';

new Vue({
  el: '#app',
  name:"welcome",
  components: {
    Welcome
  },
  template: '<Welcome/>'
});

