<template>
  <div id="main-nav" :style="menuBgStyle">
    <menu-button :isOpen="isOpen" @menuBtnClick="toggleIsOpen()"></menu-button>
    <menu-links :isOpen="isOpen" @menuLinkClick="toggleIsOpen()"></menu-links>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MenuButton from "./elements/MenuButton";
import MenuLinks from "./elements/MenuLinks";

export default {
  name: "main-nav",
  components: { MenuButton, MenuLinks },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapGetters({
      darkPrime: "theme/darkPrime",
      lightNeutral: "theme/lightNeutral"
    }),
    menuBgStyle() {
      return {
        backgroundColor: this.isOpen ? this.darkPrime.color : this.lightNeutral.color,
        zIndex: this.isOpen ? 10 : 0,
        width: this.isOpen ? "28.125rem" : "inherit"
      };
    }
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
#main-nav {
  bottom: 0;
  position: absolute;
  top: 0;
}
</style>