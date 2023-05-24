<template>
  <div class="mapPage">
    <spot-search></spot-search>
    <map-side-bar></map-side-bar>
    <div id="map" class="mt-3" style="width: 100vw; height: 980px"></div>
  </div>
</template>

<script>
import SpotSearch from "@/components/plan/PlanSearch.vue";
import MapSideBar from "@/components/plan/Bar/PlanSideBar.vue";

export default {
  components: {
    SpotSearch,
    MapSideBar,
  },
  methods: {
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      this.map = new kakao.maps.Map(container, options);
      this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      //마커
      var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      this.marker = new kakao.maps.Marker({ position: markerPosition });
      this.marker.setMap(this.map);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7c42e0103f913ac2760f8ba8e7810307";
      document.head.appendChild(script);
    }
  },
};
</script>

<style scoped>
.mapPage {
  display: flex;
  position: relative;
  width: 100wv;
  height: 100hv;
}
.sidebar {
  float: right;
}
</style>
