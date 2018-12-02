import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

// Components
import App from './App.vue'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
