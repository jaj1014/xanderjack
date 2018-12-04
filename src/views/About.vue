<template>
  <div id="about">
    <h1>About Vue Component</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    message: state => state.code.message
  })
}
</script>

<style lang="scss">
</style>