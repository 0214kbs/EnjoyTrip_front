<template>
  <div>
    <!-- Start Banner Hero -->
    <section class="py-0" id="main">
      <div class="container position-relative">
        <div class="row align-items-center min-vh-75 my-lg-8">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">회원정보</h2>
              <div class="form-group">
                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="name" id="name" v-model="userName" />
              </div>
              <div class="form-group">
                <label for="id"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="id" id="id" v-model="userId" />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input type="email" name="email" id="email" v-model="userEmail" />
              </div>
              <div class="form-group">
                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="address" id="address" v-model="userAddress" />
              </div>

              <div class="form-group form-button" style="display: flex">
                <input
                  type="submit"
                  value="수정"
                  @click="update"
                  style="width: 200px; background-color: #4298f3; color: white; border: none; border-radius: 10px"
                />
                <input
                  type="submit"
                  value="탈퇴"
                  @click="userdelete"
                  style="width: 200px; background-color: #4298f3; color: white; border: none; border-radius: 10px"
                />
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
      data: JSON.parse(sessionStorage.getItem("userDto")),
      userName: "",
      userId: "",
      userEmail: "",
      userAddress: "",
    };
  },
  methods: {
    async update() {
      try {
        let response = await http.put("/user/" + this.userId, {
          userName: this.userName,
          userId: this.userId,
          userEmail: this.userEmail,
          userAddress: this.userAddress,
        });
        let { data } = response;
        if (data == 1) {
          this.detail();
          this.$alertify.message("수정완료");
        } else if (data.result == "fail") {
          this.$alertify.error("에러,,.");
        }
      } catch (error) {
        console.error(error);
        this.$alertify.error("회원정보 수정과정에서 문제 발생.");
      }
    },
    async detail() {
      try {
        let response = await http.get("/user/" + this.userId);
        let { data } = response;

        if (data.result == "login") {
          this.$router.push("/login");
        } else {
          sessionStorage.setItem("userDto", JSON.stringify(data.userDto));
          this.$router.go(0);
        }
      } catch (error) {
        console.error(error);
        this.$alertify.error("회원정보 수정과정에서 문제 발생.");
      }
    },
    async userdelete() {
      var answer = confirm("탈퇴하시겠습니까?");
      if (answer) {
        try {
          let response = await http.delete("/user/" + this.userId);
          let { data } = response;
          console.log(data);
          if (data == 1) {
            localStorage.clear();
            this.$router.push("/");
          }
        } catch (error) {
          console.error(error);
          this.$alertify.error("탈퇴 과정에서 문제 발생.");
        }
      } else {
        alert("취소되었습니다.");
      }
    },
  },
  created() {
    this.userName = this.data.userName;
    this.userId = this.data.userId;
    this.userEmail = this.data.userEmail;
    this.userAddress = this.data.userAddress;
  },
};
</script>

<style scoped>
.container {
  border-radius: 20%;
  width: 900px;
  background-color: #ffffff;
  margin: auto;
}
input {
  margin-right: 10px;
}
</style>
