<template>
  <div class="snippet-block">
    <div>
      <snippet :value="accent" width="20"></snippet>
      <snippet :value="lightPrime" width="230"></snippet>
    </div>
    <div>
      <snippet :value="medPrime" width="280"></snippet>
    </div>
    <div>
      <snippet :value="lightPrime" width="80"></snippet>
      <snippet :value="darkPrime" width="175"></snippet>
    </div>
    <div>
      <snippet :value="darkPrime" width="20"></snippet>
      <snippet :value="accent" width="175"></snippet>
      <snippet :value="darkNeutral" width="80"></snippet>
    </div>
    <div>
      <snippet :value="darkNeutral" width="100"></snippet>
      <snippet :value="lightPrime" width="80"></snippet>
      <snippet :value="medPrime" width="20"></snippet>
      <snippet :value="darkNeutral" width="80"></snippet>
    </div>
    <div>
      <snippet :value="darkNeutral" width="20"></snippet>
      <snippet :value="darkPrime" width="260"></snippet>
    </div>
    <div>
      <snippet :value="accent" width="178"></snippet>
      <snippet :value="lightPrime" width="20"></snippet>
      <snippet :value="darkNeutral" width="20"></snippet>
    </div>
    <div>
      <snippet :value="darkNeutral" width="20"></snippet>
      <snippet :value="medPrime" width="170"></snippet>
      <snippet :value="accent" width="80"></snippet>
    </div>
    <div>
      <snippet :value="lightPrime" width="310"></snippet>
    </div>
    <div>
      <snippet :value="darkNeutral" width="80"></snippet>
      <snippet :value="darkPrime" width="175"></snippet>
    </div>
    <div>
      <snippet :value="darkNeutral" width="20"></snippet>
      <snippet :value="accent" width="175"></snippet>
      <snippet :value="darkNeutral" width="80"></snippet>
    </div>
    <div>
      <snippet :value="lightPrime" width="100"></snippet>
      <snippet :value="medPrime" width="80"></snippet>
      <snippet :value="lightPrime" width="20"></snippet>
      <snippet :value="darkPrime" width="80"></snippet>
    </div>
    <div>
      <snippet :value="medPrime" width="20"></snippet>
      <snippet :value="darkPrime" width="222"></snippet>
    </div>
    <div>
      <snippet :value="lightPrime" width="178"></snippet>
      <snippet :value="accent" width="20"></snippet>
      <snippet :value="medPrime" width="20"></snippet>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Snippet from './Snippet';

export default {
  name: 'snippet-block',
  components: {
    Snippet
  },
  computed: {
    ...mapGetters({
      accent: 'theme/accent',
      lightPrime: 'theme/lightPrime',
      medPrime: 'theme/medPrime',
      darkPrime: 'theme/darkPrime',
      darkNeutral: 'theme/darkNeutral'
    })
  }
}
</script>

<style lang="scss" scoped>
  .snippet-block {
    width: 320px;
  }
</style>