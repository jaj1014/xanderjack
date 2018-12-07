<template>
  <section id="about">
    <h2>{{ page.header }}</h2>
    <p>{{ page.desc.p1 }}</p>
    <p>{{ page.desc.p2 }}</p>
    <p>{{ page.desc.p3 }}</p>
    <article>
      <h3>{{ page.skills.header }}</h3>
      <ul>
        <li v-for="skill in page.skills.items" :key="skill.name">{{ skill.name }}</li>
      </ul>
    </article>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    page: state => state.page.about
  })
}
</script>

<style lang="scss">
</style>