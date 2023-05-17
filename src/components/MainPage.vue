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
    <login-modal></login-modal>
    <regist-modal></regist-modal>
  </div>
</template>

<script>
import KoreaTrip from "./KoreaTrip.vue";
import LoginModal from "./modal/LoginModal.vue";
import RegistModal from "./modal/RegistModal.vue";

export default {
  components: { KoreaTrip, LoginModal, RegistModal },
};
</script>

<style scoped>
#front {
  background-image: url("@/assets/img/front.jpg");
}
</style>
