<template>
  <div>
    <h1 v-if="tag === 'h1'" :style="headerStyle">{{ text }}</h1>
    <h2 v-if="tag === 'h2'" :style="headerStyle">{{ text }}</h2>
    <h3 v-if="tag === 'h3'" :style="headerStyle">{{ text }}</h3>
    <h4 v-if="tag === 'h4'" :style="subTextStyle">{{ text }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'section-header',
  props: ['text', 'tag'],
  computed: {
    ...mapGetters({
      header: 'theme/header',
      subText: 'theme/heroSubText'
    }),
    headerStyle() {
      return { color: this.header.color }
    },
    subTextStyle() {
      return { color: this.subText.color }
    }
  }
}
</script>
