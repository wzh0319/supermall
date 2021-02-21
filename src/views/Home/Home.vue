<template>
  <div>
    <nav-bar>
      <div slot="left">&lt;</div>
      <div slot="center" class="home-nav">购物街</div>
      <div slot="right">&gt;</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
