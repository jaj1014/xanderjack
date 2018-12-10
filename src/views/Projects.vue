<template>
  <section id="projects">
    <section-header :text="page.header" tag="h2"></section-header>
    <article v-for="project in page.items" :key="project.name" class="projs-item">
      <div class="projs-item__img"></div>
      <div class="projs-item__text">
        <h3>{{ project.header }}</h3>
        <p>{{ project.desc }}</p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import SectionHeader from '../components/text/SectionHeader'

export default {
  components: { SectionHeader },
  computed: mapState({
    page: state => state.page.projects
  })
}
</script>

<style lang="scss">
</style>