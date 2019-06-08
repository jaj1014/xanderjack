export default {
  darkPrime: state => state.isDarkTheme ? state.colors.color6 : state.colors.color1,
  codeMedPrime: state => state.colors.color2,
  lightPrime: state => state.colors.color3,
  darkNeutral: state => state.colors.color4,
  lightNeutral: state => state.isDarkTheme ? state.colors.color1 : state.colors.color6,
  accent: state => state.colors.color7,
  background: state => state.isDarkTheme ? state.colors.color1 : state.colors.color6,
  header: state => state.isDarkTheme ? state.colors.color6 : state.colors.color1,
  heroSubText: state => state.isDarkTheme ? state.colors.color7 : state.colors.color2,
  actionBackground: state => state.isDarkTheme ? state.colors.color6 : state.colors.color2,
  actionIcon: state => state.isDarkTheme ? state.colors.color2 : state.colors.color6,
  dropShadow: state => state.isDarkTheme ? state.colors.shadow2 : state.colors.shadow1
}