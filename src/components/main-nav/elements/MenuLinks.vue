<template>
  <nav :class="{ open: isOpen }">
    <router-link
      v-for="item in menuItems"
      class="menu-item fnt-xl fnt-lead"
      exact
      :key="item.name"
      :to="item.path"
      :style="{
          color: menuText.color, 
          textDecoration: item.path !== $route.fullPath ? 'none' : ('underline solid' + accent.color)
        }"
    >
      <span @click="$emit('menuLinkClick')">{{item.name}}.</span>
    </router-link>
  </nav>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "menu-link",
  props: {
    isOpen: Boolean
  },
  computed: {
    ...mapState({
      menuItems: state => state.page.menu.items
    }),
    ...mapGetters({
      menuText: "theme/menuText",
      accent: "theme/accent"
    }),
    menuItemStyle() {
      return {
        color: this.menuText.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10rem;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  visibility: hidden;
  width: 100%;

  &.open {
    .menu-item {
      visibility: visible;
    }
  }
}

.menu-item {
  display: block;
  margin-bottom: 5rem;
  visibility: hidden;
}
</style>