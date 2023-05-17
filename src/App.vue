<template>
  <div>
    <nav-bar
      v-on:call-parent-loginmodal="showloginmodal"
      v-on:call-parent-registmodal="showregistmodal"
    ></nav-bar>
    <router-view v-on:call-parent-loginSuccess="loginSuccess"></router-view>
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {
      isLogin: false,
      userInfo: {},
    };
  },

  components: {
    NavBar,
    MainPage, //NavBar: NavBar
  },
  methods: {
    showloginmodal() {
      var signupModal = document.querySelector("#signup-modal");
      signupModal.style.display = "block";
    },
    showregistmodal() {
      var registModal = document.querySelector("#regist-modal");
      registModal.style.display = "block";
    },
    loginSuccess(userInfo) {
      this.isLogin = true;
      this.userInfo = userInfo;
    },
  },
};
// <link
// 	href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
// 	rel="stylesheet">
// <!-- Custom CSS -->
</script>

<style>
@import "./assets/css/theme.css";
@import "@/assets/css/boxicon.min.css";
@import "@/assets/css/templatemo.css";
@import "@/assets/css/custom.css";
@import "@/assets/css/modal.css";
@import "@/vendors/plyr/plyr.css";
@import "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap";
</style>
