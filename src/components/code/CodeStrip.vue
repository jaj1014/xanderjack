<template>
  <div id="code-strip">
    <snippet-block v-for="(block, index) in blocksDisplayArr" :key="index"></snippet-block>
  </div>
</template>

<script>
import SnippetBlock from "./elements/SnippetBlock";

let windowHeight = window.innerHeight;
const handleResize = e => (windowHeight = e.target.innerHeight);
window.addEventListener("resize", handleResize);

export default {
  name: "code-strip",
  components: {
    SnippetBlock
  },
  computed: {
    blocksDisplayArr() {
      return new Array(Math.ceil(windowHeight / 252));
    }
  },
  beforeDestroy() {
    window.removeEventListener(handleResize);
  }
};
</script>

<style lang="scss" scoped>
#code-strip {
  margin-left: 8.125rem;
}
</style>