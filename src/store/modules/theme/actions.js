import { theme } from '../../../api'

export default {
  updateColor({ commit, state }, payload) {
    const newData = { ...state }
    newData.colors[payload.prop] = { ...payload }

    theme.postData(newData)
    commit('changeColor', payload)
  },
  // resetTheme({ commit, state }, payload) {
  //   // do something ...
  // }

}