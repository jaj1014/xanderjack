// API IMPORTS
import { theme } from '../../api'

// Initial State
// 'type':
const state = JSON.parse(theme.getData())[0]

// // getters
// const getters = {}

// // actions
// const actions = {}

// // mutations
// const mutations = {}

export default {
  namespaced: true,
  state
}