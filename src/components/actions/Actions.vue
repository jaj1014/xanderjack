<template>
  <div id="actions">
    <theme-button></theme-button>
  </div>
</template>

<script>
import ThemeButton from "../buttons/ThemeButton";

export default {
  name: "actions",
  components: { ThemeButton }
};
</script>

<style lang="scss" scoped>
#actions {
  align-items: center;
  bottom: 2.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 2.875rem;
  position: absolute;
  width: 3.125rem;
}
</style>


