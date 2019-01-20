<template>
  <li >
    <article @click="modalOpen = !modalOpen">
      <img :src="project.img" :alt="`Screenshot image of ${project.header}`" :style="imgShadow">
      <div>
        <section-header :text="project.header" tag="h3"></section-header>
        <p class="project-desc fnt-s" :style="textStyle">{{ project.desc }}</p>
      </div>
    </article>
    <transition name="modal">
      <project-item-modal v-if="modalOpen" :projectDetail="project.detail" @outsideClick="modalOpen = !modalOpen"></project-item-modal>
    </transition>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

import SectionHeader from "../../../text/SectionHeader";
import ProjectItemModal from "./ProjectItemModal";

export default {
  name: "project-item",
  components: {
    SectionHeader,
    ProjectItemModal
  },
  data() {
    return { modalOpen: false };
  },
  props: {
    project: Object
  },
  computed: {
    ...mapGetters({
      bodyText: "theme/bodyText",
      dropShadow: "theme/dropShadow"
    }),
    textStyle() {
      return {
        color: this.bodyText.color
      };
    },
    imgShadow() {
      return {
        boxShadow: `2px 2px 10px ${this.dropShadow}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
article {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  img {
    margin-right: 3.75rem;
  }

  .project-desc {
    margin: 0;
  }
}
</style>


