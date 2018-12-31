<template>
  <button :style="color">Click me</button>
</template>

<script>
export default {
  name: "basic-button",
  props: {
    title: String,
    color: String
  },
  computed: {
    color() {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


