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
    },

    /**
     * Formats the label so that it splits into new lines after maxwidth is reached.
     * @param str
     * @param maxwidth
     * @returns {[]}
     */
    formatLabel(str, maxwidth){
      str = this.decodeHTML(str);
      var sections = [];
      var words = str.split(" ");
      var temp = "";

      words.forEach(function(item, index){
        if(temp.length > 0)
        {
          var concat = temp + ' ' + item;

          if(concat.length > maxwidth){
            sections.push(temp);
            temp = "";
          }
          else{
            if(index == (words.length-1))
            {
              sections.push(concat);
              return;
            }
            else{
              temp = concat;
              return;
            }
          }
        }

        if(index == (words.length-1))
        {
          sections.push(item);
          return;
        }

        if(item.length < maxwidth) {
          temp = item;
        }
        else {
          sections.push(item);
        }

      });

      return sections;
    },
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

