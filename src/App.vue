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
// import { initPendo } from  './vendor/pendo'
import { mapGetters, mapState } from "vuex"

import Home from './views/Home'
import Actions from "./components/actions/Actions"
import CodeStrip from "./components/code/CodeStrip"

export default {
  name: "app",
  components: {
    Home,
    Actions,
    CodeStrip
  },
  computed: {
    ...mapState({
      personalInfo: state => state.page
    }),
    ...mapGetters({
      background: "theme/background"
    }),
    bodyStyle() {
      return { backgroundColor: this.background.color };
    }
  },
  beforeCreate () {
    // initPendo()
  },
  created () {
    const contact = { ...this.personalInfo.contact };
    const skills = { ...this.personalInfo.skills.map(skill => ({ ...skill })) };

    window.__personal_information__ = { contact, skills };
  }
};
</script>