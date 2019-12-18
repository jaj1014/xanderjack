import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import page from './modules/pages/'
import theme from './modules/theme/'
import boardFootCalculator from './modules/board-foot-calculator/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page,
    theme,
    boardFootCalculator
  }
})