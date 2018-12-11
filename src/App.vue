<template>
  <div id="app" :style="bodyStyle">
    <nav>
      <theme-button></theme-button>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <div class="code-container">
      <code-strip></code-strip>
    </div>
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
    display: flex;
    flex-direction: row;
    position: absolute;
    overflow: auto;
    top: 0; right: 0; bottom: 0; left: 0;

    nav {
      width: 11.8%;
    }

    main {
      align-items: center;
      display: flex;
      width: 45.8333%
    }

    .code-container {
      align-items: center;
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      width: 42.3667%;
    }
  }
</style>