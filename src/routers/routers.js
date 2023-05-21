import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import RegistPage from "@/views/RegistPage";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import BoardPage from "@/components/Board/BoardMain.vue"
import PlanPage from "@/views/PlanPage.vue";
//import MapPage from "@/components/MapPage.vue";
import UserInfoPage from "@/views/UserInfoPage.vue";
//import store from "@/store/store.js"; // 나중에 추가

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

    // board -> 로그인 시에만 보이게! 
    //   {
    //   path: "/board",
    //   component: BoardPage,
    //   // login 여부에 따라..
    //   beforeEnter: (to, from, next) => {
    //     console.log(store.state.login.isLogin);
    //     if (!store.state.login.isLogin) {
    //       next("/login");
    //     } else {
    //       return next();
    //     }
    //   },
    // },
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
