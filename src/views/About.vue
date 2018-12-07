<template>
  <section id="about">
    <h2>replace with about.header</h2>
    <p>replace with about.desc.p1</p>
    <p>replace with about.desc.p2</p>
    <p>replace with about.desc.p3</p>
    <article>
      <h3>replace with about.skills.header</h3>
      <ul>
        <li>replace with about.skills.items[n].name</li>
      </ul>
    </article>
  </section>
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