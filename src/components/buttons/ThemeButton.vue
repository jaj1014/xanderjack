<template>
  <div id="theme-button" :style="iconBgStyle">
    <component :is="displayIcon" :style="iconStyle" @click="toggleTheme()"/>
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
    display: flex;
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 1.5625rem;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>

