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
