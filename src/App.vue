<template>
  <div id="app" :style="bodyStyle">
    <div class="left-container">
      <main-nav></main-nav>
      <actions></actions>
    </div>
    <main>
      <router-view></router-view>
    </main>
    <div class="right-container">
      <code-strip></code-strip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MainNav from "./components/main-nav/MainNav";
import Actions from "./components/actions/Actions";
import CodeStrip from "./components/code/CodeStrip";

export default {
  name: "app",
  components: {
    MainNav,
    Actions,
    CodeStrip
  },
  computed: {
    ...mapGetters({
      background: "theme/background"
    }),
    bodyStyle() {
      return { backgroundColor: this.background.color };
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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .left-container {
    width: 11.8%;
  }

  main {
    align-items: center;
    display: flex;
    width: 45.8333%;
  }

  .right-container {
    align-items: center;
    display: flex;
    overflow: hidden;
    width: 42.3667%;
  }
}
</style>