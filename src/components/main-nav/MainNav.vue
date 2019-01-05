<template>
  <div id="main-nav">
    <menu-button :isOpen="isOpen" @menuBtnClick="toggleIsOpen()"></menu-button>
    <div :class="[{ open: isOpen }, 'menu-body']" :style="menuBgStyle">
      <menu-links :isOpen="isOpen" @menuLinkClick="toggleIsOpen()"></menu-links>
    </div>
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
        backgroundColor: this.darkPrime.color
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
#main-nav,
.menu-body {
  bottom: 0;
  position: absolute;
  top: 0;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 8.5625rem;
}

.menu-body {
  opacity: 0;
  visibility: hidden;
  z-index: 0;

  &.open {
    opacity: 1;
    visibility: visible;
    width: 28.125rem;
    z-index: 10;
  }
}
</style>