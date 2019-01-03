<template>
  <span id="skill-item" class="fnt-main fnt-s" :style="skillItemStyle">{{ skillItem.name }}</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    skill: Object
  },
  computed: {
    ...mapGetters({
      skillChip: "theme/skillChip",
      skillChipText: "theme/skillChipText"
    }),
    skillItem() {
      return this.skill;
    },
    skillItemStyle() {
      return {
        color: this.skillChipText.color,
        backgroundColor: this.skillChip.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#skill-item {
  border-radius: 0.875rem;
  cursor: pointer;
  display: inline-block;
  padding: 0.1875rem 0.9375rem;
  margin: 0 0.9375rem 0.9375rem 0;
}
</style>
