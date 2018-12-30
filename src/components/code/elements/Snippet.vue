<template>
  <div class="snippet" :style="colorAndWidth" v-tippy="tippyToolTip">
    <chrome-picker id="color-picker" :value="convertedColor" @input="changeColor"></chrome-picker>
  </div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "snippet",
  components: {
    "chrome-picker": Chrome
  },
  props: {
    value: Object,
    width: String
  },
  computed: {
    convertedColor() {
      const valArr = this.value.color
        .replace("rgba(", "")
        .replace(")", "")
        .split(",");

      return { r: valArr[0], g: valArr[1], b: valArr[2], a: valArr[3] };
    },
    colorAndWidth() {
      return {
        backgroundColor: this.value.color,
        width: this.width + "px"
      };
    },
    tippyToolTip() {
      return {
        html: "#color-picker",
        trigger: "click",
        interactive: true,
        reactive: true
      };
    }
  },
  methods: {
    changeColor(color) {
      const payload = {
        newColor: `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${color.rgba.a})`,
        colorProp: this.value.prop
      };
      
      this.$store.commit('theme/changeColor', payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.snippet {
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  height: 8px;
  margin-bottom: 6px;
  margin-right: 10px;
}
</style>


