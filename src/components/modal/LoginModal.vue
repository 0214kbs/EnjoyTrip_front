<template>
  <!-- 로그인 모달 -->
  <div class="signup-modal" id="signup-modal">
    <div class="input-form-backgroud row">
      <div class="input-form col-md-12 mx-auto modal-content">
        <span class="close" @click="close">&times;</span>
        <form novalidate>
          <div class="mb-3">
            <label for="userId" class="form-label">User Id :</label>
            <input
              type="text"
              v-model="userId"
              class="form-control"
              id="userId"
              name="userId"
              placeholder="Enter User Id"
              value="ssafy"
              style="color: black"
            />
          </div>
          <div class="mb-3">
            <label for="userPwd" class="form-label">Password :</label>
            <input
              type="password"
              v-model="userPwd"
              class="form-control"
              id="userPwd"
              name="userPwd"
              placeholder="Enter User Password"
              value="1234"
              style="color: black"
            />
          </div>
        </form>
        <div class="d-flex justify-content-center">
          <button @click="login" id="btnLogin" type="button" class="btn btn-primary">로그인</button>
          <button id="findpwd" type="button" class="btn btn-primary">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 로그인 모달 끝 -->
</template>

<script>
import Vue from "vue";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);

//import http from "@/common/axios.js";

export default {
  data() {
    return {
      userId: "ssafy",
      userPwd: "1234",
    };
  },

  methods: {
    login() {
      this.$emit("call-parent-loginSuccess", {
        userId: this.userId,
        userPwd: this.userPwd,
      });
      this.$router.push("/");
    },
    close() {
      var signupModal = document.querySelector("#signup-modal");
      signupModal.style.display = "none";
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

<style scoped></style>
