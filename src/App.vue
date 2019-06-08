<template>
  <div id="app" :style="bodyStyle">
    <div class="left-container">
      <actions></actions>
    </div>
    <main>
      <home></home>
    </main>
    <div class="right-container">
      <code-strip></code-strip>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Home from './views/Home'
import Actions from "./components/actions/Actions";
import CodeStrip from "./components/code/CodeStrip";

export default {
  name: "app",
  components: {
    Home,
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