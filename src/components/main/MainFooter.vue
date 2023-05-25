<template>
  <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">EnjoyTrip</h1>

      <h2>Contact</h2>

      <address>
        부산광역시 강서구 송정동 녹산산업중로 333 (부울경 캠퍼스)<br />
        <a class="footer__btn" href="214kbs@gmail.com">Email Us</a>
      </address>
    </div>

    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title"><b>People</b></h2>
        <ul class="nav__ul">
          <li><a>Bosun Kwak</a></li>
          <li><a>Eunjeoung Kwon</a></li>
          <li><a>GyeongJu Kim</a></li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title"><b>Backend</b></h2>
        <ul class="nav__ul">
          <li><a>SpringBoot</a></li>
          <li><a>Java</a></li>
          <li><a>MySql</a></li>
          <li><a>MyBatis</a></li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title"><b>FrontEnd</b></h2>
        <ul class="nav__ul">
          <li><a>Vue2</a></li>
          <li><a>HTML5</a></li>
          <li><a>CSS3</a></li>
          <li><a>JavaScript</a></li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title"><b>Develop Tools</b></h2>
        <ul class="nav__ul">
          <li><a>VSCode</a></li>
          <li><a>STS</a></li>
          <li><a>MySQL</a></li>
        </ul>
      </li>

      <li class="nav__item">
        <h2 class="nav__title"><b>API used</b></h2>
        <ul class="nav__ul">
          <li><a>BootStrap</a></li>
          <li><a>Kakao-map</a></li>
          <li><a href="https://www.data.go.kr/data/15101578/openapi.do#/">한국관광공사 API</a></li>
          <li><a href="https://forecast7.com/">OpenWeatherMap</a></li>
        </ul>
      </li>
    </ul>

    <div class="legal">
      <p>&copy; 2023.05.26 EnjoyTrip Service starts.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  font-family: acumin-pro, system-ui, sans-serif;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-size: 14px;
  background-color: #f4f4f4;
  align-items: start;
  min-height: 100vh;
}

.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
}

.footer > * {
  flex: 1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;
}

.footer__logo {
  font-family: "Pacifico", cursive;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: #2f2f2f;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #999;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  color: #999;
}

.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: #2f2f2f;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }

  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 2 0px;
  }
}
</style>
