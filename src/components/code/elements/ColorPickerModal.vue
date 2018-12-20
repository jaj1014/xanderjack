<template>
  <div v-show="showPicker">
    <chrome-picker :value="convertedColor" @input="updateColor"></chrome-picker>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';

function RgbaColor([r, g, b, a]) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}

export default {
  name: 'color-picker-modal',
  props: {
    color: RgbaColor
  },
  computed: {
    convertedColor() {
      return new RgbaColor(
        this.color
          .replace('rgba(', '')
          .replace(')', '')
          .split(',')
      )
    },
  },
  methods: {
    updateColor(event) {
      console.log(`rgba(${event.rgba.r}, ${event.rgba.g}, ${event.rgba.b}, ${event.rgba.a})`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


