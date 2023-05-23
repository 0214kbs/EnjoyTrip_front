<template>
  <main id="main">
    <!-- ======= Blog Section ======= -->
    <section>
      <!--<div class="container">-->
        <div class="row d-flex justify-content-between">
          <div class="col-lg-8 entries ">
            <!-- 검색버튼-->
            <div class="margin btns d-flex flex-wrap" role="group" aria-label="Button group with nested dropdown">
              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ areaCodeN }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(area, index) in area1List" :key="index" @click="setArea2(area)">
                  <a class="dropdown-item">{{ area.name }}</a>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ sigunguCodeN }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(area, index) in area2List" :key="index" @click="setArea3(area)">
                  <a class="dropdown-item">{{ area.name }}</a>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ cat1N }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(cat, index) in category1List" :key="index" @click="setCat1(cat)">
                  <a class="dropdown-item">{{ cat.name }}</a>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ cat2N }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(cat, index) in category2List" :key="index" @click="setCat2(cat)">
                  <a class="dropdown-item">{{ cat.name }}</a>
                </li>
              </ul>

              <button
                type="button"
                class="btn btn-success dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ cat3N }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(cat, index) in category3List" :key="index" @click="setCat3(cat)">
                  <a class="dropdown-item">{{ cat.name }}</a>
                </li>
              </ul>
              <button @click="search" class="bi bi-search searchbtn">검색</button>
            </div>

            <!--지도
            <div class="map-section" style="width: 100%; height: 100%">
              <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>
            </div>-->

            <div id="trip-list" class="row"></div>
            <table class="shortest-route-table">
              <thead>
                <tr>
                  <th scope="col">순번</th>
                  <th scope="col">이름</th>
                  <th scope="col">장소</th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in itemList" :key="index">
                <tr data-mapx="item.mapx" data-mapy="item.mapy" @click="selectSpot(item)">
                  <td>{{ item.title }}</td>
                  <td>{{ item.addr1 }}</td>
                  <td><img :src="item.firstimage" alt="default" width="100px" /></td>
                </tr>
              </tbody>
            </table>
            <table class="list-table">
              <thead>
                <tr>
                  <th scope="col">이름</th>
                  <th scope="col">장소</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          <!--
          <div class="col-lg-4 sidebar">
            <map-side-bar :routes="routes"></map-side-bar>
          </div>
          -->
        </div>
      <!--</div>-->
    </section>
  </main>
</template>
<script>
//import SubNav from "@/components/common/SubNav.vue";
//import MapSideBar from "@/components/TripPlan/MapSideBar.vue";
import http from "@/common/axios";
//import MapSideBar from "@/components/spot/Bar/MapSideBar.vue";
import {eventBus} from "@/main.js";
export default {
  
  components: {
    //SubNav,
    //MapSideBar,
  },
  data() {
    return {
      title: "여행 경로 게시판",

      items: [{ linkToName: "/tripPlanMain", displayName: "TripPlan" }],

      //map
      map: null,
      marker: null,

      //
      numOfRows: 10,
      pageNo: 1,

      areaCodeN: "시도를 선택하세요",
      sigunguCodeN: "구군을 선택하세요",
      cat1N: "대분류를 선택하세요",
      cat2N: "중분류를 선택하세요",
      cat3N: "소분류를 선택하세요",

      areaCode: "",
      sigunguCode: "",
      cat1: "",
      cat2: "",
      cat3: "",
      //
      area1List: [{ name: "시도를 선택하세요" }],
      area2List: [{ name: "구군을 선택하세요" }],
      category1List: [{ name: "대분류를 선택하세요" }],
      category2List: [{ name: "중분류를 선택하세요" }],
      category3List: [{ name: "소분류를 선택하세요" }],

      itemList: [],
      shortestRouteList: [],

      routes: [],
    };
  },
  methods: {
    selectSpot(item) {
      //기존마커 제거

      //console.log(item.title);

      //지도 중심 이동
      var point = new kakao.maps.LatLng(item.mapy, item.mapx);
      this.map.setCenter(point);

      //마커표시
      var markerPosition = new kakao.maps.LatLng(item.mapy, item.mapx);
      this.marker.setMap(null);
      this.marker = new kakao.maps.Marker({ position: markerPosition });
      this.marker.setMap(this.map);

      // 현재 값을 경로로 선택한다.
      this.routes.push(item);
      eventBus.$emit('send-routes',this.routes);
    },
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
    async search() {
      //console.log("search");

      let urlParams =
        "?numOfRows=" +
        this.numOfRows +
        "&pageNo=" +
        this.pageNo +
        "&areaCode=" +
        this.areaCode +
        "&sigunguCode=" +
        this.sigunguCode +
        "&cat1=" +
        this.cat1 +
        "&cat2=" +
        this.cat2 +
        "&cat3=" +
        this.cat3;
      //let urlParams = "?numOfRows="+this.numOfRows+"&pageNo="+this.pageNo+"&areaCode="+this.areaCode+"&sigunguCode="+this.sigunguCode;

      let { data } = await http.get("/trip/list" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      this.itemList = res;
      this.shortestRouteList = JSON.parse(data.shortestRoute);
      //console.log(this.shortestRouteList);
    },
    // async search(){
    //   await this.getList();

    // },
    setArea2(code) {
      this.areaCode = code.code;
      this.areaCodeN = code.name;
      //console.log(code);
      this.getArea2List();
    },

    setArea3(code) {
      this.sigunguCode = code.code;
      this.sigunguCodeN = code.name;

      //console.log(code);
    },

    setCat1(code) {
      this.cat1 = code.code;
      this.cat1N = code.name;
      //console.log(code);
      this.getCat2List();
    },

    setCat2(code) {
      this.cat2 = code.code;
      this.cat2N = code.name;
      //console.log(code);
      this.getCat3List();
    },

    setCat3(code) {
      this.cat3 = code.code;
      this.cat3N = code.name;
      //console.log(code);
    },

    async getArea1List() {
      let urlParams = "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo;
      let { data } = await http.get("/trip/areaCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;
      this.area1List = codeList;
      //console.log(this.area1List);
    },

    async getArea2List() {
      let urlParams =
        "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo + "&areaCode=" + this.areaCode;
      let { data } = await http.get("/trip/areaCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;

      //console.log(codeList);
      // this.area2List = this.area2List.concat(...codeList);
      // codeList.forEach(el => {
      //   this.area2List.push(el)
      // });
      this.area2List = codeList;
      // this.$set(this.area2List,0,...codeList);
      // codeList.forEach((el, i) => {
      //   this.$set(this.area2List,i,el);
      // });
      // this.$set(this.area2List,codeList);
      //console.log(this.area2List);
    },

    async getCat1List() {
      let urlParams = "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo;
      let { data } = await http.get("/trip/categoryCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;

      this.category1List = codeList;
      console.log("대분류");
      console.log(this.category1List);
    },

    async getCat2List() {
      let urlParams =
        "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo + "&cat1=" + this.cat1;
      let { data } = await http.get("/trip/categoryCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;

      //console.log(codeList);
      this.category2List = codeList;
      //console.log(this.category2List);
    },

    async getCat3List() {
      let urlParams =
        "?numOfRows=" +
        this.numOfRows +
        "&pageNo=" +
        this.pageNo +
        "&cat1=" +
        this.cat1 +
        "&cat2=" +
        this.cat2;
      let { data } = await http.get("/trip/categoryCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;

      //console.log(codeList);
      this.category3List = codeList;
      //console.log(this.category3List);
    },
  },
  mounted() {
    this.getArea1List();
    this.getCat1List();

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
#main {
  position: absolute;
  width: 500px;
  z-index: 2;
}
.entries{
  width:500px;
  
}
.margin {
  margin-bottom: 20px;
}
.btns {
  display: flex !important;
  gap: 2px;
  justify-content: space-around !important;
}
.btns .btn-success {
  width: 100%;
}
.searchbtn {
  background: #fff;
  border: 1px solid #ddd;
  padding: 3px 10px;

  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 20px;

  background: #1bbd36;
  color: #fff;
  transition: 0.3s;
  border-radius: 4px 4px 4px 4px;
  line-height: 0;
}
</style>
