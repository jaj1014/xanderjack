<template>
  <p @click="$emit('menuBtnClick', !isOpen)">Toggle Menu</p>
</template>

<script>
export default {
  name: "menu-button",
  props: {
    isOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>

</style>
