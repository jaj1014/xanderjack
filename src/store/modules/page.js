// API IMPORTS
import { pages } from '../../api'

// Initial State
// 'type':
const state = JSON.parse(pages.getData())[0]
// console.log(state.home)

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