<template>
  <!-- Header -->
  <div>
    <nav id="main_nav" class="navbar navbar-expand-lg fixed-top navbar-light shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link to="/" class="navbar-brand d-flex align-items-center fw-bold fs-2">
          <img class="d-inline-block align-top img-fluid" src="@/assets/img/gallery/logo-icon.png" alt="" width="50" /><span class="text-primary fs-4 ps-2"
            >Trip</span
          ></router-link
        >

        <div class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
          <div class="flex-fill mx-xl-5">
            <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
              <li class="nav-item">
                <!-- <a class="nav-link btn-outline-primary rounded-pill px-3" aria-current="page" href="#main">Home</a> -->
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link btn-outline-primary rounded-pill px-3" href="#Korea-trip">국내여행</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/map" class="nav-link btn-outline-primary rounded-pill px-3">지역찾기</router-link>
              </li>
              <li class="nav-item">
                <span v-if="ISLOGIN"> <router-link to="/board" class="nav-link btn-outline-primary rounded-pill px-3">게시판</router-link></span>
                <span v-if="!ISLOGIN"> <router-link to="/login" class="nav-link btn-outline-primary rounded-pill px-3">게시판</router-link></span>
              </li>
              <li class="nav-item">
                <router-link to="/notice" class="nav-link btn-outline-primary rounded-pill px-3">공지사항</router-link>
              </li>
              <li v-show="!ISLOGIN" class="nav-item">
                <router-link to="/regist" class="nav-link btn-outline-primary rounded-pill px-3">회원가입</router-link>
              </li>
              <li class="nav-item" v-show="!ISLOGIN">
                <router-link to="/login" class="nav-link btn-outline-primary rounded-pill px-3"> 로그인 </router-link>
              </li>

              <!-- <li class="nav-item" v-show="ISLOGIN">
              <router-link to="/plan" class="nav-link btn-outline-primary rounded-pill px-3">일정확인</router-link>
            </li> -->
              <li class="nav-item" v-show="ISLOGIN">
                <router-link to="/userinfo" class="nav-link btn-outline-primary rounded-pill px-3">회원정보</router-link>
              </li>
            </ul>
          </div>
          <div class="navbar align-self-center d-flex">
            <!-- <router-link to="/notice" a class="nav-link" href="#"><i class="bx bx-bell bx-sm bx-tada-hover text-primary"> </i></router-link> -->

            <!-- <a class="nav-link dropdown-toggle" href="#" v-show="ISLOGIN"><i class="bx bx-user-circle bx-sm text-primary"></i></a> -->
            <!-- dropdown start-->
            <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret v-show="ISLOGIN">
              <template #button-content> &#9970;<span class="sr-only">Profile</span> </template>
              <b-dropdown-item href="#">
                <router-link to="/plan" class="nav-link">나의 코스</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/userinfo" class="nav-link">회원 정보</router-link>
              </b-dropdown-item>
              <b-dropdown-item id="logout" @click="logout">로그아웃</b-dropdown-item>
            </b-dropdown>
            <!-- dropdown end-->
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- Close Header -->
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";
import http from "@/common/axios.js";
Vue.use(VueAlertify);
export default {
  // 로그인 했는지 확인필요
  // props: ["isLogin"],

  components: [],
  computed: {
    ISLOGIN: function () {
      return this.isLogin;
    },
  },
  data() {
    return {
      isLogin: sessionStorage.getItem("isLogin") != null ? sessionStorage.getItem("isLogin") : false,
      loginModal: null,
    };
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.isLogin = sessionStorage.getItem("isLogin");
      console.log(this.isLogin);
    },
  },
  methods: {
    showloginModal() {
      this.$emit("call-parent-loginmodal");
    },
    showregistmodal() {
      this.$emit("call-parent-registmodal");
    },
    async logout() {
      try {
        let response = await http.get("/logout");

        let { data } = response;
        console.log(data);

        sessionStorage.clear();
        this.$router.go(0);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.isLogin = sessionStorage.getItem("isLogin");
    console.log(sessionStorage.getItem("userDto"));
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");
#main_nav {
  /*background-color: #f8f8f8;*/
  background-color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  line-height: 1.8;
  font-size: 15px;
}
</style>
