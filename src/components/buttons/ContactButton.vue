<template>
  <div>
    <round-button :icon="icon" v-tippy="tippyToolTip"></round-button>
    <contact-popover id="contact-popover"></contact-popover>
  </div>
</template>

<script>
import { MessageCircleIcon } from "vue-feather-icons";

import RoundButton from "./elements/RoundButton";
import ContactPopover from "../modal/ContactPopover";

export default {
  name: "contact-button",
  components: {
    "round-button": RoundButton,
    "contact-popover": ContactPopover
  },
  data() {
    return {
      icon: MessageCircleIcon,
      contactModal: ContactPopover,
      showModal: false
    };
  },
  computed: {
    tippyToolTip() {
      return {
        animateFill: false,
        arrow: true,
        html: "#contact-popover",
        interactive: true,
        livePlacement: true,
        placement: "right-start",
        reactive: true,
        trigger: "click"
      };
    }
  },
  methods: {
    toggleContactModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

