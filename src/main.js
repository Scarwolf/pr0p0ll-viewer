/*
Sass
 */
import './scss/app.scss';

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    /**
     * Decode a HTML string.
     * @param html
     * @returns {string}
     */
    decodeHTML: function (html) {
      let txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');

