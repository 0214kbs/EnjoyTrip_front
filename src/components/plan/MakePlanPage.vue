<template>
  <div class="mapPage">
    <spot-search :favoriteData = "favoriteData" :routeData = "routeData" ref="spot_search"></spot-search>
    <map-side-bar v-on:insetPlan="showInsertModal" v-on:fmakerevent="getfdata"  v-on:makeRoute="makeRoute"></map-side-bar>
    <div id="map" class="mt-3" style="width: 100vw; height: 980px"></div>
    <insert-modal v-on:call-parent-insert="closeAfterInsert" :routeData = "this.routeData"></insert-modal>
  </div>
</template>

<script>
import SpotSearch from "@/components/plan/PlanSearch.vue";
import MapSideBar from "@/components/plan/Bar/PlanSideBar.vue";
import InsertModal from "@/components/plan/InsertModal.vue";

import { Modal } from "bootstrap";
export default {
  components: {
    SpotSearch,
    MapSideBar,
    InsertModal,
  },
  data(){
    return{
      routeData:[], 
      favoriteData:[],
    }
  },
  methods:{ 
    makeRoute(routeData){
      this.routeData = routeData;
      this.$refs.spot_search.onMakeEvent();

    },
    getfdata(favoriteData){
      this.favoriteData = favoriteData;
      this.$refs.spot_search.fmakerEvent();
    },
    showInsertModal(routeData) {
      this.routeData = routeData;
       this.insertModal.show();
     },
     closeAfterInsert() {
      //여기서 호출한다.
      this.insertModal.hide();
      this.courseInsert();
   
    },
  },
  mounted(){
    this.insertModal = new Modal(document.querySelector("#insertModal"));
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
