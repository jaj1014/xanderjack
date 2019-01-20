<template>
  <nav :class="{ open: isOpen }">
    <router-link
      v-for="item in menuItems"
      class="menu-item fnt-xl fnt-lead"
      exact
      :key="item.name"
      :to="item.path"
      :style="menuItemStyle"
    >
      <span @click="$emit('menuLinkClick')">
        {{item.name}}.
        <span
          class="menu-item-underline"
          :style="item.path === $route.path ? itemUnderlineActive : itemUnderline"
        ></span>
      </span>
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
      accent: "theme/accent",
      darkPrime: "theme/darkPrime"
    }),
    menuItemStyle() {
      return {
        color: this.menuText.color
      };
    },
    itemUnderlineActive() {
      return {
        backgroundColor: this.accent.color
      };
    },
    itemUnderline() {
      return {
        backgroundColor: this.darkPrime.color
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

  &.open {
    .menu-item,
    .menu-item-underline {
      opacity: 1;
      visibility: visible;
    }
  }
}

.menu-item,
.menu-item-underline {
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.menu-item {
  margin-bottom: 5rem;
  text-decoration: none;
}

.menu-item-underline {
  height: 8px;
  margin-top: -1rem;
}
</style>