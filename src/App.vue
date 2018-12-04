<template>
  <div id="app">
    This is the main app
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <code-strip></code-strip>
    <router-view></router-view>
  </div>
</template>

<script>
import CodeStrip from './components/code/CodeStrip'

export default {
  name: 'app',
  components: {
    CodeStrip
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
