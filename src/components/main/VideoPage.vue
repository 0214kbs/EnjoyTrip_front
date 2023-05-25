<template>
  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="pt-5" id="featuresVideos">
    <div class="container">
      <div class="row flex-center mb-5">
        <div class="col-lg-8 text-center">
          <h1 class="fw-bold fs-md-3 fs-lg-4 fs-xl-5">Video by region</h1>
          <hr class="mx-auto text-primary my-4" style="height: 3px; width: 70px" />
          <p class="mx-auto"></p>
        </div>
      </div>

      <div id="carouselExampleInterval" class="carousel slide d-flex justify-content-center" data-bs-ride="carousel" style="max-width: 800px; margin: 0 auto">
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <div class="carousel-inner">
          <!-- 부산 -->
          <div class="carousel-item active" data-bs-interval="10000">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/F9nuCjA-cxU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <!-- 대전 -->
          <div class="carousel-item" data-bs-interval="2000">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/-0LHggNGP4A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <!-- 서울 -->
          <div class="carousel-item">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/3P1CnWI62Ik"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <!-- 인천 -->
          <div class="carousel-item">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/24iEAmpWn-0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <!-- 대구 -->
          <div class="carousel-item">
            <iframe
              width="760"
              height="515"
              src="https://www.youtube.com/embed/u1yKAaW5_vc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- end of .container-->
  </section>
  <!-- <section> close ============================-->
  <!-- ============================================-->
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/css/theme.css";
@import "@/assets/css/boxicon.min.css";
@import "@/assets/css/templatemo.css";
@import "@/assets/css/custom.css";
@import "@/assets/css/modal.css";
@import "@/vendors/plyr/plyr.css";
@import "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap";
</style>
