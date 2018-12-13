<template>
  <nav>
    <router-link
      class="menu-item fnt-xl fnt-lead"
      v-for="item in menuItems"
      :key="item.name"
      :style="menuItemStyle"
      :to="item.route"
    >{{item.name}}.</router-link>
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
      menuText: "theme/menuText"
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
.menu-item {
  display: block;
  text-decoration: none;
}
</style>

