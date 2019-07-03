/*
Sass
 */
import './scss/app.scss';

import Vue from 'vue'
import App from './App.vue'

/*
    ========================== FONT AWESOME ==========================
 */
// CORE
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Icons
import { faChartBar, faChartPie, faCamera, faUndo } from '@fortawesome/free-solid-svg-icons'
library.add(faChartBar, faChartPie, faCamera, faUndo);


Vue.component('fa-icon', FontAwesomeIcon);
/*
    ========================== FONT AWESOME END ==========================
 */

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

/*
  Color
 */
import "vue-swatches/dist/vue-swatches.min.css"

import { Modal, VoerroModal } from '@voerro/vue-modal';

Vue.component('modal', Modal);
window.VoerroModal = VoerroModal;

new Vue({
  render: h => h(App),
}).$mount('#app');

