export default {
  toggleTheme(state) {
    state.isDarkTheme = !state.isDarkTheme
  },
  changeColor(state, payload) {
    state.colors[payload.colorProp].color = payload.newColor
  }
}