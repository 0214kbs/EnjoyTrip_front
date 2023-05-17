<template>
  <!-- Header -->
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top py-3 backdrop"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div class="container">
        <a class="navbar-brand d-flex align-items-center fw-bold fs-2" href="#">
          <img
            class="d-inline-block align-top img-fluid"
            src="@/assets/img/gallery/logo-icon.png"
            alt=""
            width="50"
          /><span class="text-primary fs-4 ps-2">Trip</span></a
        >
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto pt-2 pt-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#main">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link text-600" href="#Korea-trip"
                >국내여행</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/map" class="nav-link text-600">지역찾기</router-link>
            </li>

            <li v-show="!isLogin" class="nav-item">
              <a class="nav-link text-600" @click="showregistmodal">회원가입</a>
            </li>
            <li class="nav-item">
              <button
                v-show="!isLogin"
                class="btn btn-lg btn-outline-primary order-0"
                type="submit"
                id="signup-btn"
                @click="showloginModal"
              >
                Sign In
              </button>
            </li>

            <li class="nav-item" v-show="isLogin">
              <router-link to="/userinfo" class="nav-link text-600">회원정보</router-link>
            </li>
            <li class="nav-item" v-show="isLogin">
              <a class="nav-link text-600" id="logout">로그아웃</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <!-- Close Header -->
</template>

<script>
export default {
  // 로그인 했는지 확인필요
  props: ["isLogin"],

  components: [],
  data() {
    return {
      // modal
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
  },
};
</script>

<style scoped></style>
