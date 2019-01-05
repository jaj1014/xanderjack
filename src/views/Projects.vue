<template>
  <section id="projects">
    <section-header :text="projects.header" tag="h2"></section-header>
    <projects-list :projects="projects.items"></projects-list>
  </section>
</template>

<script>
import { mapState } from "vuex";

import SectionHeader from "../components/text/SectionHeader";
import ProjectsList from "../components/lists/projects/ProjectsList";

export default {
  components: { SectionHeader, ProjectsList },
  computed: mapState({
    projects: state => state.page.projects
  })
};
</script>

<style lang="scss">
</style>