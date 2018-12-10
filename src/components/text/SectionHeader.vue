<template>
  <div v-html="displayHeader"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'section-header',
  props: {
    text: String,
    tag: String
  },
  computed: {
    ...mapGetters({
      header: 'theme/header',
      subText: 'theme/heroSubText'
    }),
    headerStyle() {
      return this.tag !== 'h4' ? this.header.color : this.subText.color
    },
    displayHeader() {
      return `<${this.tag} style="color: ${this.headerStyle}">${this.text}</${this.tag}>`
    }
  }
}
</script>
