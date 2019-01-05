<template>
  <ul id="projects-list">
    <project-item v-for="project in projects" :key="project.header" :project="project"></project-item>
  </ul>
</template>

<script>
import ProjectItem from "./elements/ProjectItem";

export default {
  name: "projects-list",
  components: {
    ProjectItem
  },
  props: {
    projects: Array
  }
};
</script>

<style lang="scss" scoped>
#projects-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

