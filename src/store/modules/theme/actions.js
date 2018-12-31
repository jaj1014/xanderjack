import { theme } from '../../../api'
import utils from './utils'

export default {
  updateColor({ commit, state }, payload) {
    const newColor = utils.convertPickerColor(payload)

    const newState = { ...state }
    newState.colors[newColor.prop] = { ...newColor }

    theme.postData(newState)
    commit('setNewState', newState)
  },
  resetColor({ commit, state }, payload) {
    const defaultColors = JSON.parse(theme.getDefaultData())[0]

    const newState = { ...state }
    newState.colors[payload] = { ...defaultColors.colors[payload] }

    theme.postData(newState)
    commit('setNewState', newState)
  },
  resetTheme({ commit, state }) {
    const newState = { ...state }
    const defaultData = JSON.parse(theme.resetData())[0]
    
    for (let prop in newState.colors) {
      newState.colors[prop] = { ...defaultData.colors[prop] }
    }

    commit('setNewState', newState)
  }
}