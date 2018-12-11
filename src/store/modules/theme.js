// API IMPORTS
import { theme } from '../../api'

// Initial State
const state = JSON.parse(theme.getData())[0]

// getters
const getters = {
  darkPrime: state => state.isDarkTheme ? state.colors.color6 : state.colors.color1,
  medPrime: state => state.isDarkTheme ? state.colors.color7 : state.colors.color2,
  lightPrime: state => state.colors.color3,
  darkNeutral: state => state.colors.color4,
  medNeutral: state => state.colors.color4,
  lightNeutral: state => state.isDarkTheme ? state.colors.color1 : state.colors.color6,
  accent: state => state.colors.color7,
  menuBackground: state => state.isDarkTheme ? state.colors.color6 : state.colors.color1,
  menuText: state => state.isDarkTheme ? state.colors.color1 : state.colors.color6,
  background: state => state.isDarkTheme ? state.colors.color1 : state.colors.color6,
  header: state => state.isDarkTheme ? state.colors.color6 : state.colors.color1,
  heroSubText: state => state.isDarkTheme ? state.colors.color7 : state.colors.color2,
  bodyText: state => state.isDarkTheme ? state.colors.color6 : state.colors.color2,
  skillChip: state => state.isDarkTheme ? state.colors.color2 : state.colors.color3,
  skillChipText: state => state.colors.color6,
  actionBackground: state => state.isDarkTheme ? state.colors.color6 : state.colors.color2,
  actionIcon: state => state.isDarkTheme ? state.colors.color2 : state.colors.color6,
  href: state => state.isDarkTheme ? state.colors.color7 : state.colors.color3,
  dropShadow: state => state.isDarkTheme ? state.colors.shadow2 : state.colors.shadow1
}

// actions - interact with API and commit mutations
// const actions = {}

// mutations
const mutations = {
  toggleTheme (state) {
    state.isDarkTheme = !state.isDarkTheme
  },
  changeColor (state, payload) {
    state.colors[payload.colorProp].color = payload.newColor
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}