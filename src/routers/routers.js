import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//import BoardMain from "@/components/BoardMain.vue";
import RegistModal from "@/components/modal/RegistModal";
import LoginModal from "@/components/modal/LoginModal.vue";
import MainPage from "@/components/MainPage.vue";
import MapPage from "@/components/MapPage.vue";
import UserInfoPage from "@/components/UserInfoPage.vue";
//import store from "@/store/store.js"; // 나중에 추가

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/login",
      component: LoginModal,
    },
    {
      path: "/regist",
      component: RegistModal,
    },
    {
      name: "MapPage",
      path: "/map",
      component: MapPage,
    },
    {
      name: "UserInfoPage",
      path: '/userinfo',
      component: UserInfoPage
    }
  ],
});

// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// import BoardMain from "@/components/BoardMain.vue";
// import MainPage from "@/components/MainPage.vue";
// import MapPage from "@/components/MapPage.vue";
// import UserInfo from "@/components/UserInfo.vue";
// //import store from "@/store/store.js"; // 나중에 추가

// export default new VueRouter({
//   routes: [
//     {
//       path: "/",
//       component: MainPage,
//     },
//     {
//       name: "BoardMain",
//       path: "/board",
//       component: BoardMain,
//       // login 여부에 따라..
//       beforeEnter: (to, from, next) => {
//         console.log(store.state.login.isLogin);
//         if (!store.state.login.isLogin) {
//           next("/login");
//         } else {
//           return next();
//         }
//       },
//     },
//     {
//       name: "MapPage",
//       path: "/map",
//       component: MapPage,
//     },
//     {
//       name: "UserInfo",
//       path: "/userinfo",
//       component: UserInfo,
//     },
//   ],
// });
