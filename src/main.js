import 'typeface-hind/index.css'
import 'typeface-montserrat/index.css'
import './styles/main.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

// Vendor js
import VueTippy from 'vue-tippy'
Vue.use(VueTippy)

// Component Imports
import App from './App'
import BoardFootCalculator from './views/BoardFootCalculator'

// Routes
const routes = [
  { path: '/', component: App },
  { path: '/board-foot-calculator', component: BoardFootCalculator }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})