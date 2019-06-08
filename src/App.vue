<template>
  <div id="app-container" :style="bodyStyle">
    <div class="left-container">
      <actions></actions>
    </div>
    <main class="main-content">
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