<template>
  <div>
    <!-- Start Banner Hero -->
    <section class="py-1" id="top">
      <div id="front" class="bg-holder d-none d-md-block"></div>
      <!--/.bg-holder-->

      <div class="container position-relative">
        <div class="row align-items-center justify-content-end min-vh-75 my-lg-7">
          <div class="col-md-7 col-lg-6 text-center text-md-end py-6">
            <h3 class="mb-4 display-1 lh-sm">Getting Around Korea!</h3>
            <br />
            <br />
            <a class="btn btn-lg btn-primary hover-top regist-btn" href="#" role="button" id="sign-up-now" style="background-color: #4298f3; border: none"
              ><router-link to="/map" class="nav-link">Join Now !</router-link></a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- End Banner Hero -->
    <main-weather></main-weather>
    <br /><br /><br />
    <main-card></main-card>
    <video-page></video-page>
    <!-- <korea-trip></korea-trip> -->
    <main-notice></main-notice>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainWeather from "@/components/main/MainWeather.vue";
import VideoPage from "@/components/main/VideoPage.vue";
// import KoreaTrip from "@/components/main/KoreaTrip.vue";
import MainNotice from "@/components/main/MainNotice.vue";
import MainFooter from "@/components/main/MainFooter.vue";
import MainCard from "@/components/main/MainCard";

export default {
  components: { MainWeather, VideoPage, MainNotice, MainCard, MainFooter },
};
</script>

<style scoped>
@import "@/assets/css/theme.css";
@import "@/assets/css/boxicon.min.css";
@import "@/assets/css/templatemo.css";
@import "@/assets/css/custom.css";
@import "@/assets/css/modal.css";
@import "@/vendors/plyr/plyr.css";
@import "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap";

#front {
  background-image: url("@/assets/img/real_main.jpg");
  /*background-position: right bottom;*/
  background-size: cover;
  width: 100%;
}
</style>
