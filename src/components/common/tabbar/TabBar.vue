<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tabBar {
  box-shadow: 0px -3px 10px rgba(201, 195, 195, 0.808);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
