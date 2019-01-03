<template>
  <ul id="skills-list">
    <li v-for="skill in skillsArr" :key="skill.name">
      <skill-item :skill="skill"></skill-item>
    </li>
  </ul>
</template>

<script>
import SkillItem from "./elements/SkillItem";

export default {
  name: "skill-list",
  components: {
    SkillItem
  },
  props: {
    skills: Array
  },
  computed: {
    skillsArr() {
      return this.skills
    }
  }
}
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
