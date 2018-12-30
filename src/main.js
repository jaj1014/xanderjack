import(/* webpackPreload: true */ 'typeface-hind/index.css')
import(/* webpackPreload: true */ 'typeface-montserrat/index.css')
import(/* webpackPreload: true */ './styles/main.scss')

import Vue from 'vue'
import store from './store'
import router from './router'

// Vendor js
import VueTippy from 'vue-tippy';
Vue.use(VueTippy);

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})