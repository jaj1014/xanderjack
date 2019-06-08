<template>
  <section id="home">
    <h1 :style="headerStyle">
      hello,
      <br>
      i'm alex jackson.
    </h1>
    <h4 :style="subTextStyle">
      My job title says Front End Engineer, but I like to think of myself as a
      <span class="bold">tinker..er</span>
    </h4>

  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      header: "theme/header",
      subText: "theme/heroSubText"
    }),
    headerStyle() {
      return {
        color: this.header.color
      }
    },
    subTextStyle() {
      return {
        color: this.subText.color
      }
    },
  }
};
</script>

<style lang="scss">
#home {
  width: 100%;
}
</style>