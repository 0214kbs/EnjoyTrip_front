<template>
  <main id="main">
    <!-- ======= Blog Section ======= -->
    <section>
      <!--<div class="container">-->
      <div class="row d-flex justify-content-between" style="height: 100%; padding-left: 15px; width: 100%">
        <div class="col-lg-8 entries scrollBar" style="height: 100%">
          <!-- 검색버튼-->
          <div class="margin btns d-flex flex-wrap" role="group" aria-label="Button group with nested dropdown">
            <!-- 시도 -->
            <div class="button1 d-flex justify-content-between">
              <div style="float: left; margin-right: 10px">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ areaCodeN }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="(area, index) in area1List" :key="index" @click="setArea2(area)">
                    <a class="dropdown-item">{{ area.name }}</a>
                  </li>
                </ul>
              </div>
              <div style="float: left">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ sigunguCodeN }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="(area, index) in area2List" :key="index" @click="setArea3(area)">
                    <a class="dropdown-item">{{ area.name }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <a @click="setCat1direct('A01')"><font-awesome-icon :icon="['fas', 'star']" style="color: #ffe32e" /></a>
            <a @click="setCat1direct('A02')"><font-awesome-icon :icon="['fas', 'tree']" size="xl" style="color: #8ac039" /></a>
            <a @click="setCat1direct('A03')"><font-awesome-icon :icon="['fas', 'bicycle']" style="color: #568dfb" /></a>
            <a @click="setCat1direct('A04')"><font-awesome-icon :icon="['fas', 'cart-shopping']" style="color: #ea5353" /></a>
            <a @click="setCat1direct('A05')"><font-awesome-icon :icon="['fas', 'utensils']" style="color: #000000" /></a>
            <a @click="setCat1direct('B02')"><font-awesome-icon :icon="['fas', 'hotel']" style="color: #9651ec" /></a>
            <a @click="setCat1direct('C01')"><font-awesome-icon :icon="['fas', 'thumbs-up']" /></a>
          </div>

          <!--
            <div class="button2 d-flex justify-content-between">
              <div style="float: left; margin-right: 10px">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ cat1N }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="(cat, index) in category1List" :key="index" @click="setCat1(cat)">
                    <a class="dropdown-item">{{ cat.name }}</a>
                  </li>
                </ul>
              </div>
              <div style="float: left; margin-right: 10px">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ cat2N }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="(cat, index) in category2List" :key="index" @click="setCat2(cat)">
                    <a class="dropdown-item">{{ cat.name }}</a>
                  </li>
                </ul>
              </div>
              <div style="float: left">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ cat3N }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="(cat, index) in category3List" :key="index" @click="setCat3(cat)">
                    <a class="dropdown-item">{{ cat.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <button @click="search" class="bi bi-search searchbtn">검색</button>
          -->

          <!--지도
            <div class="map-section" style="width: 100%; height: 100%">
              <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>
            </div>-->
          <!--
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
                <td v-if="item.firstimage"><img :src="item.firstimage" alt="default" width="100px" /></td>
                <td v-else><img src="@/assets/img/no-image.png" alt="default" width="100px" /></td>
              </tr>
            </tbody>
          </table>
        </div>
-->

          <div>
            <a
              href="#"
              class="list-group-item list-group-item-action record_list team"
              style="padding: 5px; padding-left: 10px; position: relative"
              v-for="(item, index) in itemList"
              :key="index"
            >
              <div class="member d-flex align-items-start" style="padding: 10px 10px">
                <div class="member-info" style="max-width: 250px">
                  <h4>{{ item.title }}</h4>
                  <span style="width: 150px"></span>
                  <p>{{ item.addr1 }}</p>
                </div>
                <button data-mapx="item.mapx" data-mapy="item.mapy" @click="selectSpot(item)">경로추가</button>
              </div>
            </a>
          </div>
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
import { eventBus } from "@/main.js";
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
      overlay: [],

      //
      numOfRows: 10,
      pageNo: 1,

      areaCodeN: "시도를 선택하세요",
      sigunguCodeN: "구군을 선택하세요",
      cat1N: "대분류",
      cat2N: "중분류",
      cat3N: "소분류",

      areaCode: "",
      sigunguCode: "",
      cat1: "",
      cat2: "",
      cat3: "",
      //
      area1List: [{ name: "시도를 선택하세요" }],
      area2List: [{ name: "구군을 선택하세요" }],
      category1List: [{ name: "대분류" }],
      category2List: [{ name: "중분류" }],
      category3List: [{ name: "소분류" }],

      itemList: [],
      shortestRouteList: [],

      routes: [],
      //즐겨찾기
      favoriteList: [],
      fMaker: [],
      fMakerPosition: null,
    };
  },
  methods: {
    selectSpot(item) {
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
      eventBus.$emit("send-plan", item);

      //클릭시 인포윈도우
      var content = document.createElement("div");
      content.classList.add("card");
      content.style.width = "15rem";

      var img = document.createElement("img");
      img.src = item.firstimage;
      img.classList.add("card-img-top");

      content.appendChild(img);

      var body = document.createElement("div");
      body.classList.add("card-body");

      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerHTML = item.title;
      body.appendChild(title);

      var text = document.createElement("p");
      text.classList.add("card-text");
      text.innerHTML = item.addr1;
      body.appendChild(text);

      var button = document.createElement("button");
      button.innerHTML = "즐겨찾기 추가";
      button.onclick = () => {
        this.favorite(item);
        console.log(this.favoriteList);
        //확인
        this.favoriteList.forEach((el) => {
          console.log(el);
          console.log(el.mapx + " " + el.mapy);
        });
      };

      content.appendChild(body);
      content.appendChild(button);

      var infowindow = new kakao.maps.InfoWindow({
        //map: this.map, // 인포윈도우가 표시될 지도
        position: this.marker.getPosition(),
        content: content,
      });
      kakao.maps.event.addListener(this.marker, "mouseover", this.makeOverListener(this.map, this.marker, infowindow));
      kakao.maps.event.addListener(this.marker, "click", this.makeOutListener(infowindow));
      //kakao.maps.event.addListener(this.marker, "contextmenu ", this.favorite(item));
    },
    makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    },
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    },
    //즐겨찾기 항목추가
    favorite(route) {
      console.log("즐겨찾기");
      console.log(this.favoriteList);
      this.favoriteList.push(route);
      eventBus.$emit("send-favorit", this.favoriteList);
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
    setCat1direct(item) {
      this.cat1 = item;
      this.search();
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
      let urlParams = "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo + "&areaCode=" + this.areaCode;
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
      let urlParams = "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo + "&cat1=" + this.cat1;
      let { data } = await http.get("/trip/categoryCode" + urlParams);
      let res = JSON.parse(data.result); //이래야 문자열이 객체로 변환된다.
      //console.log(res);

      let codeList = res.response.body.items.item;

      //console.log(codeList);
      this.category2List = codeList;
      //console.log(this.category2List);
    },

    async getCat3List() {
      let urlParams = "?numOfRows=" + this.numOfRows + "&pageNo=" + this.pageNo + "&cat1=" + this.cat1 + "&cat2=" + this.cat2;
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
      script.src = "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7c42e0103f913ac2760f8ba8e7810307";
      document.head.appendChild(script);
    }
  },
};
</script>
<style scoped>
#main {
  position: absolute;
  width: 400px;
  height: 100%;
  z-index: 2;
  padding-top: 60px;
}
section {
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;
  padding-top: 60px;
}
.entries {
  width: 100%;
  height: 100%;
  padding-left: 10px;
}
.button1 {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.button1 button {
  width: 175px;
}
.button2 {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.button2 button {
  width: 140px;
}
button {
  border: #4298f3;
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
  background: #4298f3;
}
.searchbtn {
  width: 100%;
  height: 35px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 3px 10px;

  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;

  background: #4298f3;
  color: #fff;
  transition: 0.3s;
  border-radius: 4px 4px 4px 4px;
  line-height: 1;
}

.scrollBar {
  overflow-y: scroll;
}

/* 아래의 모든 코드는 영역::코드로 사용 */
.scrollBar::-webkit-scrollbar {
  width: 10px; /* 스크롤바의 너비 */
}

.scrollBar::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #adcfff; /* 스크롤바의 색상 */

  border-radius: 10px;
}

.scrollBar::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
</style>
