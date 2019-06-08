<template>
  <button class="basic-btn" @click="$emit('click')">{{ title }}</button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "basic-button",
  props: {
    title: String,
    color: String
  },
  computed: {
    ...mapGetters({
      lightNeutral: "theme/lightNeutral",
      lightPrime: "theme/lightPrime"
    })
  }
};
</script>

<style lang="scss" scoped>
  .basic-btn {
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-family: 'Montserrat', 'Verdana', sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    padding: 0.75em;
    margin: 0.53em 0.25em;
    transition: all ease-in-out 200ms;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #EFEFEF;
    }
  }
</style>


