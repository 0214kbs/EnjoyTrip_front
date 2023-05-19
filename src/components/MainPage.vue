<template>
  <div>
    <!-- Start Banner Hero -->
    <section class="py-0" id="main">
      <div id="front" class="bg-holder d-none d-md-block" style="background-size: cover"></div>
      <!--/.bg-holder-->

      <div class="container position-relative">
        <div class="row align-items-center min-vh-75 my-lg-8">
          <div class="col-md-7 col-lg-6 text-center text-md-start py-8">
            <h1 class="mb-4 display-1 lh-sm">
              Travel around <br class="d-block d-lg-none d-xl-block" />the world
            </h1>
            <p class="mt-4 mb-5 fs-1 lh-base">
              Plan and book your perfect trip with expert advice,
              <br class="d-none d-lg-block" />travel tips, destination information and
              <br class="d-none d-lg-block" />inspiration from us.
            </p>
            <a
              class="btn btn-lg btn-primary hover-top regist-btn"
              href="#"
              role="button"
              id="sign-up-now"
              >Sign Up Now</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- End Banner Hero -->
    <korea-trip></korea-trip>
    <video-page></video-page>
  </div>
</template>

<script>
import VideoPage from "./VideoPage.vue";
import KoreaTrip from "./KoreaTrip.vue";
export default {
  components: { KoreaTrip, VideoPage },
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
  background-image: url("@/assets/img/front.jpg");
}
</style>
