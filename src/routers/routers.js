import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BoardMain from "@/components/BoardMain.vue";
import MainPage from "@/components/MainPage.vue";
import MapPage from "@/components/MapPage.vue";
import UserInfoPage from "@/components/UserInfoPage.vue";
import RegistModal from "@/components/modal/RegistModal.vue"
//import store from "@/store/store.js"; // 나중에 추가

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      name:"RegistModal",
      path: "/regist",
      component: RegistModal,
    },
    {
      name: "BoardMain",
      path: "/board",
      component: BoardMain,
      // login 여부에 따라..
      beforeEnter: (to, from, next) => {
        console.log(store.state.login.isLogin);
        if (!store.state.login.isLogin) {
          next("/");
        } else {
          return next();
        }
      },
    },
    {
      name: "MapPage",
      path: "/map",
      component: MapPage,
    },
    {
      name: "UserInfoPage",
      path: "/userinfo",
      component: UserInfoPage,
    },
  ],
});
