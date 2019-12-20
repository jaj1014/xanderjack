import { boardFootCalculator } from '../../../api'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = JSON.parse(boardFootCalculator.getData())[0];

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}