import 'typeface-hind/index.css'
import 'typeface-montserrat/index.css'
import './styles/main.scss'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
// Vendor js
import VueTippy from 'vue-tippy'
// Component App Imports
import Xanderjack from './app-pages/Xanderjack'
import BoardFootCalculator from './app-pages/BoardFootCalculator'

// Use
Vue.use(VueTippy)
Vue.use(VueRouter)

// Routes
const routes = [
  { path: '', name: 'xanderjack', component: Xanderjack },
  { path: '/board-foot-calculator', name:'boardFootCalculator', component: BoardFootCalculator }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h('router-view'),
})