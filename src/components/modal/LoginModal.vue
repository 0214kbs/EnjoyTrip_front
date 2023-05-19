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
              <h2 class="form-title">Sign up</h2>
              <form method="POST" class="register-form" id="login-form">
                <div class="form-group">
                  <label for="your_name"
                    ><i class="zmdi zmdi-account material-icons-name"></i
                  ></label>
                  <input
                    type="text"
                    name="userId"
                    id="userId"
                    value="ssafy"
                    placeholder="userId"
                    v-model="userId"
                  />
                </div>
                <div class="form-group">
                  <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                  <input
                    type="password"
                    name="userPwd"
                    id="userPwd"
                    value="1234"
                    placeholder="Password"
                    v-model="userPassword"
                  />
                </div>

                <div class="form-group form-button">
                  <input
                    @click="login"
                    type="submit"
                    value="Register"
                    name="signin"
                    id="signin"
                    class="form-submit"
                  />
                </div>
              </form>
              <div class="social-login">
                <span class="social-label">Or login with</span>
                <ul class="socials">
                  <li>
                    <a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a>
                  </li>
                </ul>
              </div>
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
      console.log("메롱");
      try {
        let response = await http.post("/login", {
          userId: this.userId,
          userPassword: this.userPassword,
        });

        let { data } = response;
        console.log(data);
        if (data.result == "success") {
          this.$emit("call-parent-loginSuccess", {
            userName: data.userName,
            userId: data.userId,
            userEmail: data.userEmail,
            userAddress: data.userAddress,
            // userProfileImageUrl: data.userProfileImageUrl,
          });
          // main 이동
          this.$router.push("/main");
        } else if (data.result == "fail") {
          this.$alertify.error("이메일 또는 비밀번호가 올바르지 않습니다.");
        }
      } catch (error) {
        console.error(error);
        this.$alertify.error("로그인 과정에서 오류가 발생했습니다.");
      }
    },

    // async login() {
    //   // axios 비동기 통신
    //   try {
    //     let response = await http.post("/login", {
    //       userId: this.userId,
    //       userPwd: this.userPwd,
    //     });
    //     let { data } = response;
    //     console.log(data);
    //     if (data.result == "success") {
    //       this.$emit("call-parent-loginSuccess", {
    //         userName: data.name,
    //         userId: data.id,
    //         userEmail: data.email,
    //         userAdd: data.address,
    //         // userProfileImageUrl: data.userProfileImageUrl,
    //       });
    //       // main 이동
    //       this.$router.push("/");
    //     } else if (data.result == "fail") {
    //       this.$alertify.error("이메일 또는 비밀번호가 올바르지 않습니다.");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     this.$alertify.error("로그인 과정에서 오류가 발생했습니다.");
    //   }
    // },
    // // 비밀번호 찾기
    // async findpwd() {
    //   try {
    //     let response = await http.get("/user/" + this.userId);
    //     let { data } = response;
    //     console.log(data);
    //     alert(data.userPwd);
    //   } catch (error) {
    //     console.error(error);
    //     this.$alertify.error("비밀번호를 찾는 과정에서 오류 발생.");
    //   }
    // },
  },
};
</script>

<style scoped>
@import "@/assets/css/loginstyle.css";
@import "@/assets/fonts/material-icon/css/material-design-iconic-font.min.css";
.container {
  width: 900px;
  background-color: #ffffff;
  margin: auto;
}
</style>
