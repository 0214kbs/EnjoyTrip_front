<template>
  <div>
    <nav-bar v-bind:isLogin="isLogin" v-bind:userInfo="userInfo" />
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
    loginSuccess(userInfo) {
      this.isLogin = true;
      this.userInfo = userInfo;
    },
  },
};
</script>

<style></style>
