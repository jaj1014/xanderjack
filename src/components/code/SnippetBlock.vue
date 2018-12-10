<template>
  <div class="snippet-block">
    <div>
      <snippet :color="accent.color" width="20"></snippet>
      <snippet :color="lightPrime.color" width="230"></snippet>
    </div>
    <div>
      <snippet :color="medPrime.color" width="280"></snippet>
    </div>
    <div>
      <snippet :color="lightPrime.color" width="80"></snippet>
      <snippet :color="darkPrime.color" width="175"></snippet>
    </div>
    <div>
      <snippet :color="darkPrime.color" width="20"></snippet>
      <snippet :color="accent.color" width="175"></snippet>
      <snippet :color="darkNeutral.color" width="80"></snippet>
    </div>
    <div>
      <snippet :color="darkNeutral.color" width="100"></snippet>
      <snippet :color="lightPrime.color" width="80"></snippet>
      <snippet :color="medPrime.color" width="20"></snippet>
      <snippet :color="darkNeutral.color" width="80"></snippet>
    </div>
    <div>
      <snippet :color="darkNeutral.color" width="20"></snippet>
      <snippet :color="darkPrime.color" width="260"></snippet>
    </div>
    <div>
      <snippet :color="accent.color" width="178"></snippet>
      <snippet :color="lightPrime.color" width="20"></snippet>
      <snippet :color="darkNeutral.color" width="20"></snippet>
    </div>
    <div>
      <snippet :color="darkNeutral.color" width="20"></snippet>
      <snippet :color="medPrime.color" width="170"></snippet>
      <snippet :color="accent.color" width="80"></snippet>
    </div>
    <div>
      <snippet :color="lightPrime.color" width="310"></snippet>
    </div>
    <div>
      <snippet :color="darkNeutral.color" width="80"></snippet>
      <snippet :color="darkPrime.color" width="175"></snippet>
    </div>
    <div>
      <snippet :color="darkNeutral.color" width="20"></snippet>
      <snippet :color="accent.color" width="175"></snippet>
      <snippet :color="darkNeutral.color" width="80"></snippet>
    </div>
    <div>
      <snippet :color="lightPrime.color" width="100"></snippet>
      <snippet :color="medPrime.color" width="80"></snippet>
      <snippet :color="lightPrime.color" width="20"></snippet>
      <snippet :color="darkPrime.color" width="80"></snippet>
    </div>
    <div>
      <snippet :color="medPrime.color" width="20"></snippet>
      <snippet :color="darkPrime.color" width="222"></snippet>
    </div>
    <div>
      <snippet :color="lightPrime.color" width="178"></snippet>
      <snippet :color="accent.color" width="20"></snippet>
      <snippet :color="medPrime.color" width="20"></snippet>
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