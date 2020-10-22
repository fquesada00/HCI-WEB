<template>
  <span class="imgBack"></span>
</template>

<script>
export default {
name: "BackgroundImage"
}
</script>

<style scoped>
.imgBack {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 0 0 0 0;
  left: 0;
  z-index: 0;
  background: url('../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg') no-repeat center center;
  background-size: cover;
}
</style>