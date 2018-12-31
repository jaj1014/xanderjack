<template>
  <div class="snippet" :style="colorAndWidth" v-tippy="tippyToolTip">
    <div id="color-picker">
      <chrome-picker :value="convertedColor" @input="updateColor"></chrome-picker>
      <basic-btn @click="resetColor(colorProp)" title="Reset Color"></basic-btn>
      <basic-btn @click="resetTheme" title="Reset Theme"></basic-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Chrome } from "vue-color";
import BasicButton from "../../buttons/BasicButton";

export default {
  name: "snippet",
  components: {
    "chrome-picker": Chrome,
    "basic-btn": BasicButton
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
    colorProp() {
      return this.value.prop;
    },
    colorAndWidth() {
      return {
        backgroundColor: this.value.color,
        width: this.width + "px"
      };
    },
    tippyToolTip() {
      return {
        animateFill: false,
        html: "#color-picker",
        trigger: "click",
        livePlacement: true,
        theme: "picker",
        interactive: true,
        reactive: true
      };
    }
  },
  methods: {
    ...mapActions({
      resetColor: "theme/resetColor",
      resetTheme: "theme/resetTheme"
    }),
    updateColor(pickerColor) {
      const payload = { pickerColor, prop: this.value.prop };
      this.$store.dispatch("theme/updateColor", payload);
    }
  }
};
</script>

<style lang="scss">
.snippet {
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  height: 8px;
  margin-bottom: 6px;
  margin-right: 10px;
}

.tippy-tooltip {
  &.picker-theme {
    padding: 0;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  }
}
</style>


