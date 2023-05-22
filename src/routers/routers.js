import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import RegistPage from "@/views/RegistPage";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import BoardPage from "@/components/Board/BoardMain.vue";
import PlanPage from "@/views/PlanPage.vue";
//import MapPage from "@/components/MapPage.vue";
import UserInfoPage from "@/views/UserInfoPage.vue";
// import store from "@/store/store.js"; // 나중에 추가

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/regist",
      component: RegistPage,
    },

    {
      path: "/board",
      component: BoardPage,
    },
    {
      path: "/plan",
      component: PlanPage,
    },
    // {
    //   name: "MapPage",
    //   path: "/map",
    //   component: MapPage,
    // },
    {
      name: "UserInfoPage",
      path: "/userinfo",
      component: UserInfoPage,
    },
  ],
});
