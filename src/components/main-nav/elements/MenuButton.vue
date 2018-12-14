<template>
  <!-- <p @click="$emit('menuBtnClick')">Toggle Menu</p> -->
  <div class="menu cross menu--1" @click="$emit('menuBtnClick')">
    <label>
      <input type="checkbox">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="30"></circle>
        <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35"></path>
        <path class="line--2" d="M0 50h70"></path>
        <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65"></path>
      </svg>
    </label>
  </div>
</template>

<script>
export default {
  name: "menu-button",
  props: {
    isOpen: Boolean
  }
};
</script>

<style lang="scss" scoped>
input {
  display: none;
}

label {
  display: block;
  cursor: pointer;
  position: absolute;
  max-width: 100px;
  max-height: 100px;
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
  stroke: #333054;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

.line--2 {
  --length: 28;
  --offset: -38;
  stroke: #9c93ff;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

.line--3 {
  --length: 22;
  --offset: -38;
  stroke: #6761a8;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
}

circle {
  fill: #fff3;
  opacity: 0;
}

.cross input:checked + svg {
  .line--1,
  .line--3 {
    --length: 22.627416998;
  }
  .line--2 {
    --length: 0;
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
