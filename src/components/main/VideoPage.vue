<template>
  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="pt-5" id="featuresVideos">
    <div class="container">
      <div class="row flex-center mb-5">
        <div class="col-lg-8 text-center">
          <h1 class="fw-bold fs-md-3 fs-lg-4 fs-xl-5">Featured videos</h1>
          <hr class="mx-auto text-primary my-4" style="height: 3px; width: 70px" />
          <p class="mx-auto">
            Aliquam sodales vitae ex tincidunt consectetur. Etiam eleifend malesuada magna, at
            imperdiet justo euismod eu. Aliquam vel imperdet mi, et convallis eros. Duis fermentum
            fringilla nisl at vulputate. Nunc nec lorem faucibus, molestie nisi id, elementum sem.
            Sed vulputate tempor augue a efficitur urna, ultrices eu. Duis vel turpis et arcu.
          </p>
        </div>
      </div>
      <div class="row flex-center">
        <div class="col-12">
          <div
            class="carousel slide"
            id="carouselExampleIndicators"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div class="row align-items-center">
              <div class="col-12 col-xxl-7 px-2">
                <div class="carousel-inner">
                  <div class="carousel-item active h-100">
                    <div
                      class="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/zLeLttVbFs8"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div
                      class="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/nUI8f_hvKZw"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div
                      class="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/xf86EzuLXu0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div
                      class="player"
                      data-plyr-provider="youtube"
                      data-plyr-embed-id="bTqVqk7FSmY"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/YkEd_aorIiI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-3 col-xxl-2 pt-3 pt-md-0">
                <div class="carousel-indicators">
                  <div class="row h-100 w-100">
                    <div class="col-12 px-1">
                      <button
                        class="active"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        aria-current="true"
                        aria-label="Slide 1"
                      >
                        <img class="d-block" src="@/assets/img/부산.jpg" alt="..." />
                      </button>
                    </div>
                    <div class="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      >
                        <img class="d-block" src="@/assets/img/부산.jpg" alt="..." />
                      </button>
                    </div>
                    <div class="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      >
                        <img class="d-block" src="@/assets/img/부산.jpg" alt="..." />
                      </button>
                    </div>
                    <div class="col-12 px-1">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      >
                        <img class="d-block" src="@/assets/img/부산.jpg" alt="..." />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
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
