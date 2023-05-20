<template>
  <!-- Header -->

  <nav id="main_nav" class="navbar navbar-expand-lg fixed-top navbar-light">
        <div class="container d-flex justify-content-between align-items-center">
          <router-link to="/" class="navbar-brand d-flex align-items-center fw-bold fs-2">
          <img
            class="d-inline-block align-top img-fluid"
            src="@/assets/img/gallery/logo-icon.png"
            alt=""
            width="50"
          /><span class="text-primary fs-4 ps-2">Trip</span></router-link
        >

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
                <div class="flex-fill mx-xl-5 mb-2">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                      <li class="nav-item">
              <a class="nav-link btn-outline-primary rounded-pill px-3" aria-current="page" href="#main">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link btn-outline-primary rounded-pill px-3" href="#Korea-trip"
                >국내여행</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/map" class="nav-link btn-outline-primary rounded-pill px-3">지역찾기</router-link>
            </li>
            <li v-show="!isLogin" class="nav-item">
              <router-link to="/regist" class="nav-link btn-outline-primary rounded-pill px-3">회원가입</router-link>
            </li>
            <li class="nav-item" v-show="!isLogin">
              <router-link to="/login" class="nav-link btn-outline-primary rounded-pill px-3">  Sign In
              </router-link>
            </li>

            <li class="nav-item" v-show="isLogin">
              <router-link to="/userinfo" class="nav-link btn-outline-primary rounded-pill px-3">회원정보</router-link>
            </li>
            <li class="nav-item" v-show="isLogin">
              <a class="nav-link btn-outline-primary rounded-pill px-3" id="logout" @click="logout">로그아웃</a>
            </li>

                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <a class="nav-link" href="#"><i class='bx bx-bell bx-sm bx-tada-hover text-primary'></i></a>
                    <a class="nav-link dropdown-toggle" href="#" v-show="isLogin"><i class='bx bx-user-circle bx-sm text-primary'></i></a>
                  </div>
                 
            </div>
        </div>
    </nav>
  <!-- Close Header -->
</template>

<script>
export default {
  // 로그인 했는지 확인필요
  // props: ["isLogin"],

  components: [],
  data() {
    return {
      isLogin : false,
      loginModal: null,
    };
  },
  methods: {
    showloginModal() {
      this.$emit("call-parent-loginmodal");
    },
    showregistmodal() {
      this.$emit("call-parent-registmodal");
    },
    logout(){
      localStorage.clear();
      this.$router.go(0);
    }
  },
  created(){
    this.isLogin = localStorage.getItem("isLogin");   
    console.log(this.isLogin);
  }
};
</script>

<style scoped>
#main_nav{
  background-color: #f8f8f8;
}
</style>
