<template>
  <!-- 회원가입 모달 -->
  <div class="regist-modal" id="regist-modal">
    <div class="input-form-backgroud row">
      <div class="input-form col-md-12 mx-auto modal-content">
        <span class="close2">&times;</span>
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
  </div>
  <!-- 회원가입 모달 -->
</template>

<script>
export default {};
</script>

<style scope></style>
