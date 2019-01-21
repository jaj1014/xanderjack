<template>
  <div class="contact-popover">
    <github :style="iconStyle"></github>
    <linkedin :style="iconStyle"></linkedin>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GithubIcon, LinkedinIcon } from "vue-feather-icons";

export default {
  name: "contact-popover",
  components: {
    github: GithubIcon,
    linkedin: LinkedinIcon
  },
  computed: {
    ...mapGetters({
      darkPrime: "theme/darkPrime"
    }),
    iconStyle() {
      return {
        color: this.darkPrime.color // TODO: fix this so it's always the same color .. won't toggle with theme for UX
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-popover {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 5rem;
}
</style>


