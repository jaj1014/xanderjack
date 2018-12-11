<template>
  <div>
    <snippet-block v-for="(block, index) in blocksDisplayArr" :key="index"></snippet-block>
  </div>
</template>

<script>
import SnippetBlock from "./SnippetBlock"

// TODO: make this work ... not currently dynamic
let windowHeight = window.innerHeight
const handleResize = e => windowHeight = e.target.innerHeight
window.addEventListener("resize", handleResize)

export default {
  name: "code-strip",
  components: {
    SnippetBlock
  },
  computed: {
    blocksDisplayArr() {
      return new Array(Math.ceil(windowHeight / 252))
    }
  }
};
</script>

<style lang="scss" scoped>
</style>