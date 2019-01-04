<template>
  <li>
    <span
      id="skill-item"
      class="fnt-main fnt-s"
      :style="skillItemStyle"
      v-tippy="tippyToolTip"
    >{{ skill.name }}</span>
    <skill-popover id="skill-popover" :skill="skill"></skill-popover>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

import SkillPopover from './SkillPopover';

export default {
  props: {
    skill: Object
  },
  components: {
    "skill-popover": SkillPopover
  },
  computed: {
    ...mapGetters({
      skillChip: "theme/skillChip",
      skillChipText: "theme/skillChipText"
    }),
    skillItemStyle() {
      return {
        color: this.skillChipText.color,
        backgroundColor: this.skillChip.color
      }
    },
    tippyToolTip() {
      return {
        animateFill: false,
        arrow: true,
        html: "#skill-popover",
        interactive: true,
        livePlacement: true,
        reactive: true,
        trigger: "click"
      };
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
