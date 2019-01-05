<template>
  <li>
    <article class="projs-item">
      <div class="projs-item__img"></div>
      <div class="projs-item__text">
        <section-header :text="project.header" tag="h3"></section-header>
        <p>{{ project.desc }}</p>
      </div>
    </article>
  </li>
</template>

<script>
import SectionHeader from "../../../text/SectionHeader";

export default {
  name: "project-item",
  components: {
    SectionHeader
  },
  props: {
    project: Object
  }
};
</script>

<style lang="scss" scoped>
</style>


