<template>
  <div class="modal-bg">
    <div class="modal-body">
      sometext
      <button @click="$emit('outsideClick')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-item-modal",
  props: {
    projectDetail: Object
  }
};
</script>

<style lang="scss" scoped>
.modal-bg {
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9998;
}

.modal-body {
  background-color: #fff; // TODO: replace ...
  border-radius: 0.25rem;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  height: 40vh;
  width: 30vw;
  z-index: 9999;
}
</style>
