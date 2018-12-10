<template>
  <div id="app" :style="bodyStyle">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>-->
    <p @click="toggleTheme()">Click to toggle theme</p>
    <code-strip></code-strip>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import CodeStrip from "./components/code/CodeStrip";

export default {
  name: "app",
  components: {
    CodeStrip
  },
  computed: {
    ...mapGetters({
      background: 'theme/background'
    }),
    bodyStyle () {
      return { backgroundColor: this.background.color }
    }
  },
  methods: {
    ...mapMutations({
      toggleTheme: "theme/toggleTheme"
    })
  }
};
</script>

<style lang="scss"></style>