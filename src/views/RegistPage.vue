<template>
  <div>
    <!-- Start Banner Hero -->
    <section class="py-0" id="main">
      <div class="container position-relative">
        <div class="row align-items-center min-vh-75 my-lg-8">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Register</h2>
              <div class="form-group">
                <label for="name"><font-awesome-icon :icon="['fas', 'user']" /></label>
                <input type="text" name="name" id="name" placeholder="Your Name" v-model="userName" />
              </div>
              <div class="form-group">
                <label for="id"><font-awesome-icon :icon="['fas', 'fingerprint']" /></label>
                <input type="text" name="id" id="id" placeholder="Your Id" v-model="userId" />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input type="email" name="email" id="email" placeholder="Your Email" v-model="userEmail" />
              </div>
              <div class="form-group">
                <label for="pass"><font-awesome-icon :icon="['fas', 'lock']" /></label>
                <input type="password" name="password" id="password" placeholder="Password" v-model="userPwd" />
              </div>
              <div class="form-group">
                <label for="name"><font-awesome-icon :icon="['fas', 'map']" /></label>
                <input type="text" name="address" id="address" placeholder="Your Address" v-model="userAddress" />
              </div>

              <div class="form-group form-button">
                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" @click="regist" />
              </div>
            </div>
            <div class="signup-image">
              <figure><img src="@/assets/images/signup-image.jpg" alt="sing up image" /></figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";
import http from "@/common/axios.js";
Vue.use(VueAlertify);

export default {
  data() {
    return {
      userName: "",
      userId: "",
      userPwd: "",
      userEmail: "",
      userAddress: "",
    };
  },
  methods: {
    async regist() {
      // axios 비동기 통신
      try {
        console.log(this.userName);
        let response = await http.post("/users", {
          userName: this.userName,
          userId: this.userId,
          userPassword: this.userPwd,
          userEmail: this.userEmail,
          userAddress: this.userAddress,
        });
        let { data } = response;
        console.log(data);
        if (data.result == "success") {
          this.$alertify.message("회원가입 완료!.");
          this.$router.push("/login");
        } else if (data.result == "fail") {
          this.$alertify.error("에러,,.");
        }
      } catch (error) {
        console.error(error);
        this.$alertify.error("회원가입 과정에서 문제 발생.");
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/loginstyle.css";
@import "@/assets/fonts/material-icon/css/material-design-iconic-font.min.css";
.container {
  border-radius: 20%;
  width: 900px;
  background-color: #ffffff;
  margin: auto;
}
</style>
