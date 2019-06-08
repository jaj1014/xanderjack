import 'typeface-hind/index.css'
import 'typeface-montserrat/index.css'
import './styles/main.scss'

import Vue from 'vue'
import store from './store'

// Vendor js
import VueTippy from 'vue-tippy'
Vue.use(VueTippy)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App),
})