<template>
  <div id="app">
    <tab-bar-main></tab-bar-main>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBarMain from "components/content/TabBarMain";
export default {
  name: "app",
  components: {
    TabBarMain,
  },
};
</script>

<style>
@import url("assets/css/base.css");
</style>
