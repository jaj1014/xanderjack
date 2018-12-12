<template>
  <div>
    <round-button :icon="icon" @btnClick="toggleContactModal()"></round-button>
    <component :is="contactModal" v-show="showModal"></component>
  </div>
</template>

<script>
import { MessageCircleIcon } from "vue-feather-icons";

import RoundButton from "./base/RoundButton";
import Contact from "../modal/Contact";

export default {
  name: "contact-button",
  components: { RoundButton },
  data() {
    return {
      icon: MessageCircleIcon,
      contactModal: Contact,
      showModal: false
    };
  },
  methods: {
    toggleContactModal() {
      this.showModal = !this.showModal
    }
  }
};
</script>

<style lang="scss" scoped>
#theme-button {
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

