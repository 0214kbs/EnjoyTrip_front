<template>
  <div>
    <!-- Start Banner Hero -->
    <section class="py-0" id="main">
      <div class="container position-relative">
        <div class="row align-items-center min-vh-75 my-lg-8">
          <div class="signin-content">
            <div class="signin-image">
              <figure><img src="@/assets/images/signin-image.jpg" alt="sing up image" /></figure>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Log in</h2>
              <div class="form-group">
                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="userId" id="userId" value="ssafy" placeholder="userId" v-model="userId" />
              </div>
              <div class="form-group" style="display: flex; justify-content: space-between">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input type="password" name="userPwd" id="userPwd" value="1234" placeholder="Password" v-model="userPassword" />
              </div>

              <div class="form-group form-button">
                <button @click="login" type="submit" name="signin" id="signin" class="form-submit form-wide w-btn w-btn-blue">Login</button>
              </div>
              <a @click="findpwd" href="#" class="form-link">비밀번호 찾기</a>
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
import alertify from "alertifyjs";
Vue.use(VueAlertify);

//import http from "@/common/axios.js";

export default {
  data() {
    return {
      userId: "",
      userPassword: "",
    };
  },

  methods: {
    async login() {
      // axios 비동기 통신
      try {
        console.log(this.userId);
        console.log(this.userPassword);
        let response = await http.post("/login", {
          userId: this.userId,
          userPassword: this.userPassword,
        });

        let { data } = response;
        console.log(data.userDto);

        if (data.result == "login") {
          this.$router.push("/login");
        } else {
          sessionStorage.setItem("isLogin", true);

          if (this.userId == "admin") {
            sessionStorage.setItem("admin", true);
          }

          sessionStorage.setItem("userDto", JSON.stringify(data.userDto));

          this.$router.push("/");
          alertify.success("로그인되었습니다.", 1.5);
        }
      } catch (error) {
        console.error(error);
        this.$alertify.error("로그인 과정에서 오류가 발생했습니다.");
      }
    },

    // 비밀번호 찾기
    async findpwd() {
      const result = prompt("아이디를 입력하세요");

      console.log(result);

      try {
        let response = await http.get("/user/findpwd/" + result);
        let { data } = response;
        console.log(data);
        alert(data.userPassword);
      } catch (error) {
        console.error(error);
        this.$alertify.error("비밀번호를 찾는 과정에서 오류 발생.");
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
.form-link {
  display: block;
  text-align: center;
}
.w-btn {
  position: relative;
  border: none;
  display: inline-block;
  padding: 6px 122px;
  border-radius: 5px;
  font-family: "paybooc-Light", sans-serif;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
}

.w-btn-blue {
  background-color: #4298f3;
  color: #deeaf2;
}
</style>
