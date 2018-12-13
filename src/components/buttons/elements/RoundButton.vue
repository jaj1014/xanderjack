<template>
  <div class="round-button" :style="btnBgStyle" @click="$emit('btnClick')">
    <component :is="icon" :style="btnIconStyle"></component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "round-button",
  props: { icon: Object },
  computed: {
    ...mapGetters({
      actionIcon: "theme/actionIcon",
      actionBackground: "theme/actionBackground",
      dropShadow: "theme/dropShadow"
    }),
    btnIconStyle() {
      return { color: this.actionIcon.color };
    },
    btnBgStyle() {
      return {
        backgroundColor: this.actionBackground.color,
        boxShadow: `2px 2px 20px ${this.dropShadow}`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.round-button {
  align-items: center;
  border-radius: 1.5625rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  justify-content: space-evenly;
  width: 3.125rem;
}
</style>

