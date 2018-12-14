<template>
  <nav v-show="isOpen">
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
  width: 100%;
}

.menu-item {
  display: block;
  margin-bottom: 5rem;
}
</style>