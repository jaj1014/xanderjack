<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link> -->
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

<style lang="scss"></style>