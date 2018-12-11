<template>
  <div id="theme-button" :style="iconBgStyle" @click="toggleTheme()">
    <component :is="displayIcon" :style="iconStyle"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { SunIcon, MoonIcon } from "vue-feather-icons";

export default {
  name: "theme-button",
  components: { SunIcon, MoonIcon },
  computed: {
    ...mapState({
      isDarkTheme: state => state.theme.isDarkTheme
    }),
    ...mapGetters({
      actionIcon: 'theme/actionIcon',
      actionBackground: 'theme/actionBackground'
    }),
    displayIcon() {
      return this.isDarkTheme ? SunIcon : MoonIcon
    },
    iconStyle() {
      return { color: this.actionIcon.color }
    },
    iconBgStyle() {
      return { backgroundColor: this.actionBackground.color }
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit("theme/toggleTheme");
    }
  }
}
</script>

<style lang="scss" scoped>
  #theme-button {
    align-items: center;
    border-radius: 1.5625rem;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25); // TODO: replace with dynamic style
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 3.125rem;
    justify-content: space-evenly;
    width: 3.125rem;
  }
</style>

