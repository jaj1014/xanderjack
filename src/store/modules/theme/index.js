import { theme } from '../../../api'
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

// Initial State
const state = JSON.parse(theme.getData())[0]

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}