import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import page from './modules/page'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page,
    theme
  }
})