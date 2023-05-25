<template>
  <div class="projcard-container" style="width: 700px">
    <div class="row flex-center mb-5">
      <div class="col-lg-8 text-center">
        <h1 class="fw-bold fs-md-3 fs-lg-4 fs-xl-5">About function</h1>
        <hr class="mx-auto text-primary my-4" style="height: 3px; width: 70px" />
        <p class="mx-auto"></p>
      </div>
    </div>
    <div class="projcard projcard-blue">
      <div v-if="ISLOGIN">
        <router-link to="/board">
          <div class="projcard-innerbox">
            <img class="projcard-img" src="https://picsum.photos/800/600?image=0" />
            <div class="projcard-textbox">
              <div class="projcard-title">게시판</div>
              <div class="projcard-bar"></div>
              <div class="projcard-description">
                정보 공유하는 게시판 <br />
                - 로그인 후 이용 가능
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div v-if="!ISLOGIN">
        <router-link to="/login">
          <div class="projcard-innerbox">
            <img class="projcard-img" src="https://picsum.photos/800/600?image=0" />
            <div class="projcard-textbox">
              <div class="projcard-title">게시판</div>
              <div class="projcard-bar"></div>
              <div class="projcard-description">
                정보 공유하는 게시판 <br />
                - 로그인 후 이용 가능
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="projcard projcard-red">
      <router-link to="/map">
        <div class="projcard-innerbox">
          <img class="projcard-img" src="https://picsum.photos/800/600?image=816" />
          <div class="projcard-textbox">
            <div class="projcard-title">사용자 정의 코스 및 즐겨찾기</div>
            <div class="projcard-bar"></div>
            <div class="projcard-description">
              - 사용자가 직접 경로를 설정하여 코스 저장 가능 <br />
              - 각 사용자마다 장소 즐겨찾기 가능
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div class="projcard projcard-green">
      <router-link to="/plan">
        <div class="projcard-innerbox">
          <img class="projcard-img" src="https://picsum.photos/800/600?image=1038" />
          <div class="projcard-textbox">
            <div class="projcard-title">나의 코스</div>
            <div class="projcard-bar"></div>
            <div class="projcard-description">저장한 코스 확인</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Demo Code: */
body {
  font-family: "Open Sans", arial, sans-serif;
  color: #333;
  font-size: 14px;
}
.projcard-container {
  margin: 50px 0;
}

/* Actual Code: */
.projcard-container,
.projcard-container * {
  box-sizing: border-box;
}
.projcard-container {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
}
.projcard {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #ddd;
  font-size: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.projcard:hover {
  box-shadow: 0 34px 32px -33px rgba(0, 0, 0, 0.18);
  transform: translate(0px, -3px);
}
.projcard::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
  opacity: 0.07;
}
.projcard:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #424242, transparent 50%);
}
.projcard-innerbox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.projcard-img {
  position: absolute;
  display: block;
  height: 300px;
  width: 400px;
  top: 0;
  left: 0;
  transition: transform 0.2s ease;
}
.projcard:nth-child(2n) .projcard-img {
  left: initial;
  right: 0;
}
.projcard:hover .projcard-img {
  transform: scale(1.05) rotate(1deg);
}
.projcard:hover .projcard-bar {
  width: 70px;
}
.projcard-textbox {
  position: absolute;
  top: 7%;
  bottom: 7%;
  left: 430px;
  width: calc(100% - 470px);
  font-size: 17px;
}
.projcard:nth-child(2n) .projcard-textbox {
  left: initial;
  right: 430px;
}
.projcard-textbox::before,
.projcard-textbox::after {
  content: "";
  position: absolute;
  display: block;
  background: #ff0000bb;
  background: #fff;
  top: -20%;
  left: -55px;
  height: 140%;
  width: 60px;
  transform: rotate(8deg);
}
.projcard:nth-child(2n) .projcard-textbox::before {
  display: none;
}
.projcard-textbox::after {
  display: none;
  left: initial;
  right: -55px;
}
.projcard:nth-child(2n) .projcard-textbox::after {
  display: block;
}
.projcard-textbox * {
  position: relative;
}
.projcard-title {
  font-family: "Voces", "Open Sans", arial, sans-serif;
  font-size: 20px;
}
.projcard-bar {
  left: -2px;
  width: 50px;
  height: 5px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #424242;
  transition: width 0.2s ease;
}
.projcard-blue .projcard-bar {
  background-color: #0088ff;
}
.projcard-blue::before {
  background-image: linear-gradient(-70deg, #0088ff, transparent 50%);
}
.projcard-blue:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #0088ff, transparent 50%);
}
.projcard-red .projcard-bar {
  background-color: #d62f1f;
}
.projcard-red::before {
  background-image: linear-gradient(-70deg, #d62f1f, transparent 50%);
}
.projcard-red:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #d62f1f, transparent 50%);
}
.projcard-green .projcard-bar {
  background-color: #40bd00;
}
.projcard-green::before {
  background-image: linear-gradient(-70deg, #40bd00, transparent 50%);
}
.projcard-green:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #40bd00, transparent 50%);
}
.projcard-yellow .projcard-bar {
  background-color: #f5af41;
}
.projcard-yellow::before {
  background-image: linear-gradient(-70deg, #f5af41, transparent 50%);
}
.projcard-yellow:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #f5af41, transparent 50%);
}
.projcard-orange .projcard-bar {
  background-color: #ff5722;
}
.projcard-orange::before {
  background-image: linear-gradient(-70deg, #ff5722, transparent 50%);
}
.projcard-orange:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #ff5722, transparent 50%);
}
.projcard-brown .projcard-bar {
  background-color: #c49863;
}
.projcard-brown::before {
  background-image: linear-gradient(-70deg, #c49863, transparent 50%);
}
.projcard-brown:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #c49863, transparent 50%);
}
.projcard-grey .projcard-bar {
  background-color: #424242;
}
.projcard-grey::before {
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
}
.projcard-grey:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, #424242, transparent 50%);
}
.projcard-customcolor .projcard-bar {
  background-color: var(--projcard-color);
}
.projcard-customcolor::before {
  background-image: linear-gradient(-70deg, var(--projcard-color), transparent 50%);
}
.projcard-customcolor:nth-child(2n)::before {
  background-image: linear-gradient(-250deg, var(--projcard-color), transparent 50%);
}
.projcard-description {
  z-index: 10;
  font-size: 15px;
  color: #424242;
  height: 125px;
  text-overflow: ellipsis;
}
</style>
