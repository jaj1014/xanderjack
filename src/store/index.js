import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import code from './modules/code'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    code
  }
})