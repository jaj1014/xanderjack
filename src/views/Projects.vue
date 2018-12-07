<template>
  <section id="projects">
    <h2>replace with projects.header</h2>
    <article class="projs-item">
      <div class="projs-item__img"></div>
      <div class="projs-item__text">
        <h3>replace with projects.items[n].header</h3>
        <p>replace with projects.items[n].desc</p>
      </div>
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