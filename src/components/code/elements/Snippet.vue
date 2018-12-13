<template>
  <div class="snippet" :style="colorAndWidth"></div>
</template>

<script>
export default {
  name: "snippet",
  props: ["color", "width"],
  computed: {
    colorAndWidth() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.snippet {
  border-radius: 6px;
  display: inline-block;
  height: 8px;
  margin-bottom: 6px;
  margin-right: 10px;
}
</style>


