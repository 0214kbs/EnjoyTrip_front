<template>
  <!-- 회원가입 모달 -->
  <div class="regist-modal" id="regist-modal">
    <div class="container">
      <span class="close" @click="close">&times;</span>
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>

                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="@/assets/images/signup-image.jpg" alt="sing up image"></figure>
                    </div>
                </div>
            </div>
  </div>
  <!--
    <div class="input-form-backgroud row">
      <div class="input-form col-md-12 mx-auto modal-content">
        <span class="close2" @click="close">&times;</span>
        <h4 class="mb-3">회원가입</h4>
        <form novalidate class="validation-form">
          <div class="mb-3">
            <label for="name">이름</label>
            <input
              type="text"
              class="form-control"
              style="color: black"
              name="name"
              id="name"
              placeholder="김싸피"
              required
            />

            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="mb-3">
            <label for="name">아이디</label>
            <input
              type="text"
              class="form-control"
              style="color: black"
              name="id"
              id="id"
              placeholder="ssafy"
              required
            />
            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="mb-3">
            <label for="pwd">비밀번호</label>
            <input
              type="password"
              class="form-control"
              style="color: black"
              name="pwd"
              id="pwd"
              value=""
              required
            />

            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
          <div class="mb-3">
            <label for="pwd2">비밀번호 확인</label>
            <input
              type="password"
              class="form-control"
              style="color: black"
              name="pwd2"
              id="pwd2"
              value=""
              required
            />

            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>

          <div class="mb-3">
            <label for="email">이메일</label>
            <input
              type="email"
              class="form-control"
              style="color: black"
              name="email"
              id="email"
              placeholder="ssafy@ssafy.com"
              required
            />
            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>

          <div class="mb-3">
            <label for="address">주소</label>
            <input
              type="text"
              class="form-control"
              style="color: black"
              name="address"
              id="address"
              placeholder="부산광역시 사상구"
              required
            />
            <div class="valid-feedback">Valid</div>
            <div class="invalid-feedback">Invalid</div>
          </div>
        </form>
        <hr class="mb-4" />
        <button id="btnRegister" class="btn btn-primary btn-lg btn-block" type="button">
          회원가입
        </button>
      </div>
    </div>
  -->
  <!-- 회원가입 모달 -->
</template>

<script>
export default {
  methods: {
    close() {
      var registModal = document.querySelector("#regist-modal");
      registModal.style.display = "none";
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/loginstyle.css";
@import "@/assets/fonts/material-icon/css/material-design-iconic-font.min.css";
.container {
  width: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px; 
  
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);}
</style>
