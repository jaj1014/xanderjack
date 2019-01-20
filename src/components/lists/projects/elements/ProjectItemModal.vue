<template>
  <div class="modal-bg">
    <div class="modal-body" :style="modalBodyStyle">
      <x-icon class="close-icon" :style="iconStyle" @click="$emit('outsideClick')"></x-icon>
      <section-header :text="projectDetail.title" tag="h3"></section-header>
      <section-desc :text="projectDetail.outline"></section-desc>
      <div class="skills-wrapper">
        <skills-list :skills="skillsFromTech"></skills-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { XIcon } from "vue-feather-icons";

import SectionHeader from "../../../text/SectionHeader";
import SectionDesc from "../../../text/SectionDesc";
import SkillsList from "../../skills/SkillsList";

export default {
  name: "project-item-modal",
  components: {
    SectionHeader,
    SectionDesc,
    SkillsList,
    XIcon
  },
  props: {
    projectDetail: Object
  },
  computed: {
    ...mapGetters({
      background: "theme/background",
      bodyText: "theme/bodyText"
    }),
    skillsFromTech() {
      return this.$store.getters.filteredSkills(
        this.projectDetail.technologies
      );
    },
    modalBodyStyle() {
      return {
        backgroundColor: this.background.color
      };
    },
    iconStyle() {
      return {
        color: this.bodyText.color
      }
    }
  }
};
</script>

<style lang="scss">
.modal-bg {
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
}

.modal-body {
  border-radius: 0.25rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 40vw;
  z-index: 9999;
}

.close-icon {
  cursor: pointer;
  float: right;
  transition: all 25ms linear;

  &:hover {
    transform: scale(1.15);
  }
}

.skills-wrapper {
  margin-top: 2.5rem;
}
</style>
