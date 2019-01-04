<template>
  <div :class="[{ open: isOpen }, 'menu-btn', 'cross menu--1']">
    <label>
      <input type="checkbox" :checked="isOpen">
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" @click="$emit('menuBtnClick')">
        <circle cx="60" cy="60" r="20"></circle>
        <path :style="line1Style" class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35"></path>
        <path :style="line2Style" class="line--2" d="M0 50h70"></path>
        <path :style="line3Style" class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65"></path>
      </svg>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "menu-button",
  props: {
    isOpen: Boolean
  },
  computed: {
    ...mapGetters({
      darkPrime: "theme/darkPrime",
      lightNeutral: "theme/lightNeutral"
    }),
    ...mapState({
      medPrime: state => state.theme.colors.color2,
      lightPrime: state => state.theme.colors.color3
    }),
    line1Style() {
      return {
        stroke: this.isOpen ? this.lightNeutral.color : this.darkPrime.color
      };
    },
    line2Style() {
      return { stroke: this.lightPrime.color };
    },
    line3Style() {
      return { stroke: this.medPrime.color };
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-btn {
  position: absolute;
  height: 120px;
  width: 120px;
  left: 0px;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 11;

  &.open {
    left: 345px;
  }
}

input {
  display: none;
}

label {
  display: block;
  cursor: pointer;
  position: relative;
  max-width: 120px;
  max-height: 120px;
}

path {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.line--1 {
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

.line--2 {
  --length: 28;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

.line--3 {
  --length: 22;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

circle {
  fill: #fff3;
  opacity: 0;
}

.cross {
  input:checked + svg {
    .line--1,
    .line--3 {
      --length: 22.627416998;
    }
    .line--2 {
      --length: 0;
    }
  }
}

.menu--1 {
  .line--1,
  .line--3 {
    --total-length: 126.64183044433594;
  }
  .line--2 {
    --total-length: 70;
  }
  input:checked + svg {
    .line--1,
    .line--3 {
      --offset: -94.1149185097;
    }
    .line--2 {
      --offset: -50;
    }
  }
}
</style>
