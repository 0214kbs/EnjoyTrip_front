import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import RegistPage from "@/views/RegistPage";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import BoardPage from "@/views/BoardPage.vue";
import NoticePage from "@/views/NoticePage.vue";
import PlanPage from "@/views/PlanPage.vue";
import UserInfoPage from "@/views/UserInfoPage.vue";
import MapPage from "@/components/plan/MakePlanPage.vue";
import MakePlanPage from "@/components/plan/MakePlanPage";
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
      path: "/map",
      component: MapPage,
    },
    {
      path: "/test",
      component: MakePlanPage,
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
      path: "/notice",
      component: NoticePage,
    },
    {
      path: "/plan",
      component: PlanPage,
    },
    {
      name: "UserInfoPage",
      path: "/userinfo",
      component: UserInfoPage,
    },
  ],
});
