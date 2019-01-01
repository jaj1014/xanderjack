<template>
  <div id="section-desc">
    <p v-for="(p, key) in paragraphs" :key="key" :style="textStyle">{{ p }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "section-desc",
  props: {
    text: Object
  },
  computed: {
    ...mapGetters({
      bodyText: "theme/bodyText"
    }),
    paragraphs() {
      return this.text;
    },
    textStyle() {
      return {
        color: this.bodyText.color
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
