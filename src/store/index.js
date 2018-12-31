import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import page from './modules/pages/'
import theme from './modules/theme/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page,
    theme
  }
})