<template>
  <div id="actions">
    <theme-button></theme-button>
    <contact-button></contact-button>
  </div>
</template>

<script>
import ContactButton from "../buttons/ContactButton";
import ThemeButton from "../buttons/ThemeButton";

export default {
  name: "actions",
  components: { ContactButton, ThemeButton }
};
</script>

<style lang="scss" scoped>
#actions {
  align-items: center;
  bottom: 2.875rem;
  display: flex;
  flex-direction: column;
  height: 7.1875rem;
  justify-content: space-between;
  left: 2.875rem;
  position: absolute;
  width: 3.125rem;
}
</style>


