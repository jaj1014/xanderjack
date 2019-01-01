<template>
  <span>{{ skillItem.name }}</span>
</template>

<script>
export default {
  props: {
    skill: Object
  },
  computed: {
    skillItem() {
      return this.skill;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
