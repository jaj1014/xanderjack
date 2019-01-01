<template>
  <section id="about">
    <section-header :text="page.header" tag="h2"></section-header>
    <section-desc :text="page.desc"></section-desc>
    <article>
      <section-header :text="page.header" tag="h3"></section-header>
      <skills-list :skills="page.skills.items"></skills-list>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";

import SectionHeader from "../components/text/SectionHeader";
import SectionDesc from "../components/text/SectionDesc";
import SkillsList from "../components/lists/skills/SkillsList";

export default {
  components: { SectionHeader, SectionDesc, SkillsList },
  computed: {
    ...mapState({
      page: state => state.page.about
    })
  }
};
</script>

<style lang="scss">
</style>