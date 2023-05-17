<template>
  <div class="col-md-9 mx-auto container mb-5">
    <br /><br /><br /><br /><br /><br />
    <div class="section-title">
      <h2 style="margin-top: 20px">지역별 관광 정보</h2>
      <form class="d-flex my-3">
        <select id="area1List" class="form-select me-2">
          <option value="">시도 선택</option>
        </select>
        <select id="area2List" class="form-select me-2">
          <option value="">구군 선택</option>
        </select>
        <select id="cat1List" class="form-select me-2">
          <option value="">대분류 선택</option>
        </select>
        <select id="cat2List" class="form-select me-2">
          <option value="">중분류 선택</option>
        </select>
        <select id="cat3List" class="form-select me-2">
          <option value="">소분류 선택</option>
        </select>
        <button type="button" class="btn btn-outline-success" id="btnSearch">검색</button>
      </form>

      <!-- kakao map start -->
      <MapKakao :latitude="37.39843974939604" :longitude="127.10972941510465" />
      <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>

      <!-- kakao map end -->
      <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>

      <!-- 관광지 table -->
      <div id="table-container"></div>
      <!-- End 관광지 table -->
    </div>
  </div>
</template>

<script>
import MapKakao from "@/components/MapKakao.vue";

export default {
  //sigunguCode,
  components: {
    MapKakao,
  },
  mounted() {
    //this.initialize();
  },
  methods: {
    // async initialize() {
    //   // await getArea1List();
    //   // await getCat1List();
    //   document.querySelector("#btnSearch").onclick = function () {
    //     sigunguCode = document.querySelector("#area2List").value;
    //     cat3 = document.querySelector("#cat3List").value;
    //     getList();
    //   };
    // },
  },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
