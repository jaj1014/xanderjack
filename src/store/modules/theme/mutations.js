export default {
  toggleTheme(state) {
    state.isDarkTheme = !state.isDarkTheme
  },
  setNewState(state, payload) {
    state = payload
  }
}