<template>
  <ul id="skills-list">
    <skill-item v-for="skill in skills" :key="skill.name" :skill="skill"></skill-item>
  </ul>
</template>

<script>
import SkillItem from "./elements/SkillItem";

export default {
  name: "skills-list",
  components: {
    SkillItem
  },
  props: {
    skills: Array
  }
};
</script>

<style lang="scss" scoped>
#skills-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
