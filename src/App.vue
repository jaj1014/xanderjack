<template>
  <div id="app" :style="bodyStyle">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>-->
    <theme-button></theme-button>
    <code-strip></code-strip>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import CodeStrip from "./components/code/CodeStrip"
import ThemeButton from "./components/buttons/ThemeButton"

export default {
  name: "app",
  components: {
    CodeStrip,
    ThemeButton
  },
  computed: {
    ...mapGetters({
      background: 'theme/background'
    }),
    bodyStyle () {
      return { backgroundColor: this.background.color }
    }
  }  
};
</script>

<style lang="scss">
  #app {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
  }
</style>