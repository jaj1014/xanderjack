<template>
  <li>
    <article>
      <img :src="project.img" :alt="`Screenshot image of ${project.header}`" :style="imgShadow">
      <div>
        <section-header :text="project.header" tag="h3"></section-header>
        <p class="project-desc fnt-s" :style="textStyle">{{ project.desc }}</p>
      </div>
    </article>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

import SectionHeader from "../../../text/SectionHeader";

export default {
  name: "project-item",
  components: {
    SectionHeader
  },
  props: {
    project: Object
  },
  computed: {
    ...mapGetters({
      "bodyText": "theme/bodyText",
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    height: 174px; 
    margin-right: 3.75rem;
    width: 232px;
  }

  .project-desc {
    margin: 0;
  }
}
</style>


