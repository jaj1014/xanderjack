<template>
  <div class="snippet-block">
    <div>
      <snippet :color="aqua" width="20"></snippet>
      <snippet :color="lightPurple" width="230"></snippet>
    </div>
    <div>
      <snippet :color="medPurple" width="280"></snippet>
    </div>
    <div>
      <snippet :color="lightPurple" width="80"></snippet>
      <snippet :color="darkPurple" width="175"></snippet>
    </div>
    <div>
      <snippet :color="darkPurple" width="20"></snippet>
      <snippet :color="aqua" width="175"></snippet>
      <snippet :color="medGrey" width="80"></snippet>
    </div>
    <div>
      <snippet :color="medGrey" width="100"></snippet>
      <snippet :color="lightPurple" width="80"></snippet>
      <snippet :color="medPurple" width="20"></snippet>
      <snippet :color="medGrey" width="80"></snippet>
    </div>
    <div>
      <snippet :color="medGrey" width="20"></snippet>
      <snippet :color="darkPurple" width="260"></snippet>
    </div>
    <div>
      <snippet :color="aqua" width="178"></snippet>
      <snippet :color="lightPurple" width="20"></snippet>
      <snippet :color="medGrey" width="20"></snippet>
    </div>
    <div>
      <snippet :color="medGrey" width="20"></snippet>
      <snippet :color="medPurple" width="170"></snippet>
      <snippet :color="aqua" width="80"></snippet>
    </div>
    <div>
      <snippet :color="lightPurple" width="310"></snippet>
    </div>
    <div>
      <snippet :color="medGrey" width="80"></snippet>
      <snippet :color="darkPurple" width="175"></snippet>
    </div>
    <div>
      <snippet :color="medGrey" width="20"></snippet>
      <snippet :color="aqua" width="175"></snippet>
      <snippet :color="medGrey" width="80"></snippet>
    </div>
    <div>
      <snippet :color="lightPurple" width="100"></snippet>
      <snippet :color="medPurple" width="80"></snippet>
      <snippet :color="lightPurple" width="20"></snippet>
      <snippet :color="darkPurple" width="80"></snippet>
    </div>
    <div>
      <snippet :color="medPurple" width="20"></snippet>
      <snippet :color="darkPurple" width="222"></snippet>
    </div>
    <div>
      <snippet :color="lightPurple" width="178"></snippet>
      <snippet :color="aqua" width="20"></snippet>
      <snippet :color="medPurple" width="20"></snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Snippet';

export default {
  name: 'snippet-block',
  components: {
    Snippet
  },
  data: function () {
    return {
      aqua: '#ABFAFF',
      lightPurple: '#9C93FF',
      medPurple: '#6761A8',
      darkPurple: '#333054',
      medGrey: '#B1B1B1'
    }
  }
}
</script>

<style lang="scss" scoped>
  .snippet-block {
    width: 320px;
  }
</style>