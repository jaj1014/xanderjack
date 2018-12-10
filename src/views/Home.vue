<template>
  <section id="home">
    <section-header :text="page.header" tag="h1"></section-header>
    <section-header :text="page.subText" tag="h4"></section-header>
  </section>
</template>

<script>
import { mapState } from "vuex";

import SectionHeader from '../components/text/SectionHeader'

export default {
  components: { SectionHeader },
  computed: {
    ...mapState({
      page: state => state.page.home
    })
  }
};
</script>

<style lang="scss">
</style>