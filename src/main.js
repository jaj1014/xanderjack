import Vue from 'vue'

import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import App from './components/App.vue'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
