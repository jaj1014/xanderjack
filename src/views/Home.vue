<template>
  <section id="home">
    <h1>{{ page.header }}</h1>
    <h4>{{ page.subText }}</h4>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    page: state => state.page.home
  })
}
</script>

<style lang="scss">
</style>