<template>
  <button class="basic-btn" :style="colorStyle" @click="$emit('click')">{{ title }}</button>
</template>

<script>
export default {
  name: "basic-button",
  props: {
    title: String,
    color: String
  },
  computed: {
    colorStyle() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .basic-btn {
    cursor: pointer;
  }
</style>


