<template>
  <div>
    <tab-bar>
      <tab-bar-item color="black" path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="首页" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt="首页"
        />
        <div slot="item-title">首页</div>
      </tab-bar-item>
      <tab-bar-item color="black" path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt="分类"
        />
        <div slot="item-title">分类</div>
      </tab-bar-item>
      <tab-bar-item color="black" path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="购物车" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt="购物车"
        />
        <div slot="item-title">购物车</div>
      </tab-bar-item>
      <tab-bar-item color="black" path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt="我的"
        />
        <div slot="item-title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "TabBarMain",
  created() {},
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
