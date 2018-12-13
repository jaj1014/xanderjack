<template>
  <round-button :icon="displayIcon" @btnClick="toggleTheme()"></round-button>
</template>

<script>
import { mapState } from "vuex";
import { SunIcon, MoonIcon } from "vue-feather-icons";

import RoundButton from "./elements/RoundButton";

export default {
  name: "theme-button",
  components: { RoundButton },
  computed: {
    ...mapState({
      isDarkTheme: state => state.theme.isDarkTheme
    }),
    displayIcon() {
      return this.isDarkTheme ? SunIcon : MoonIcon;
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit("theme/toggleTheme");
    }
  }
};
</script>

<style lang="scss" scoped>
#theme-button {
  align-items: center;
  border-radius: 1.5625rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  justify-content: space-evenly;
  width: 3.125rem;
}
</style>

