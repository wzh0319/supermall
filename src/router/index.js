import Vue from "vue";
import VueRouter from "vue-router";
//导入组件
const Home = require("views/Home/Home").default;
const CateGory = require("views/CateGory/CateGory").default;
const ShopCart = require("views/ShopCart/ShopCart").default;
const ProFile = require("views/ProFile/ProFile").default;
//安装路由
Vue.use(VueRouter);
//创建路由及子路由
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: CateGory,
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/profile",
    component: ProFile,
  },
];
//创建路由实例
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
