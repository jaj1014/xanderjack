<template>
  <div class="snippet" :style="colorAndWidth" @click="toggleColorPicker"></div>
</template>

<script>
export default {
  name: "snippet",
  props: {
    color: String, 
    width: String
  },
  computed: {
    convertedColor() {
      const valArr = this.color
        .replace('rgba(', '')
        .replace(')', '')
        .split(',');

      return { r: valArr[0], g: valArr[1], b: valArr[2], a: valArr[3] }
    },
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


