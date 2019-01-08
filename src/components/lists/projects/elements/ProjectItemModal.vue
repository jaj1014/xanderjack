<template>
  <div class="modal-bg">
    <div class="modal-body" :style="modalBodyStyle">
      <section-header :text="projectDetail.title" tag="h3"></section-header>
      <section-desc :text="projectDetail.outline"></section-desc>
      <button @click="$emit('outsideClick')">Close</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SectionHeader from "../../../text/SectionHeader";
import SectionDesc from "../../../text/SectionDesc";

export default {
  name: "project-item-modal",
  components: {
    SectionHeader,
    SectionDesc
  },
  props: {
    projectDetail: Object
  },
  computed: {
    ...mapGetters({
      background: "theme/background"
    }),
    modalBodyStyle() {
      return {
        backgroundColor: this.background.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
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
  width: 30vw;
  z-index: 9999;
}
</style>
