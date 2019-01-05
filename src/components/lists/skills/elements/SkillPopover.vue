<template>
  <div class="skill-popover">
    <strong class="fnt-main fnt-s fnt-wt-600">{{ skill.name }}</strong>
    <p class="fnt-main fnt-base">{{ skill.detail }}</p>
    <p class="fnt-main fnt-base">use:
      <span class="fnt-wt-600">{{ skill.use }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "skill-popover",
  props: {
    skill: Object
  }
};
</script>

<style lang="scss">
.skill-popover {
  color: #333054;
  padding: 12px 15px;
  text-align: left;
  width: 14rem;
}

.tippy-tooltip {
  &.skill-item-theme {
    background-color: #f9f9f9;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);

    .tippy-arrow {
      border-top-color: #f9f9f9;
    }
  }
}

.tippy-popper[x-placement^="bottom"] {
  .tippy-tooltip {
    &.skill-item-theme {
      .tippy-arrow {
        border-bottom-color: #f9f9f9;
      }
    }
  }
}
</style>


