<template>
  <main id="main" style="float: right">
    <section>
      <div class="list-group mb-3 scrollBar" style="height: 100%">
        <!-- <div > -->

        <div class="tab-buttons" style="border-bottom: 1px solid #4298f3">
          <button @click="changeTab(0)" :class="{ check: ischeck_1 }">경로보기</button>
          <button @click="changeTab(1)" :class="{ check: ischeck_2 }">즐겨찾기</button>
          <button @click="InsertPlan">일정작성</button>
        </div>

        <br />

        <!--경로찾기-->
        <div v-show="activeTab" style="position: relative">
          <draggable v-model="routeData" draggable=".record_list" @change="print">
            <a
              href="#"
              class="list-group-item list-group-item-action record_list team"
              style="padding: 5px; padding-left: 10px"
              v-for="(item, index) in routeData"
              :key="index"
            >
              <div class="member d-flex align-items-start" style="padding: 10px 15px">
                <div class="member-info">
                  <h4>{{ item.title }}</h4>
                  <span style="width: 150px"></span>
                  <p>{{ item.addr1 }}</p>
                </div>
                <div class="social" style="float: right; margin: 0px; position: absolute">
                  <a @click="insertfavorit(item)"><font-awesome-icon :icon="['fas', 'star']" style="color: #ffe32e" /></a>
                </div>
                <small><button type="button" class="btn-close x-button" aria-label="Close" @click="routesDelete(index)"></button></small>
              </div>
            </a>
          </draggable>
        </div>

        <!--즐겨찾기-->
        <div v-show="!activeTab">
          <draggable v-model="favoriteData" draggable=".record_list" @change="print">
            <a
              href="#"
              class="list-group-item list-group-item-action record_list team"
              style="padding: 5px; padding-left: 10px"
              v-for="(item, index) in favoriteData"
              :key="index"
            >
              <div class="member d-flex align-items-start" @change="fmaker" style="padding: 10px 15px">
                <small
                  ><button type="button" class="btn-close x-button" aria-label="Close" style="margin-right: 10px" @click="deletefavorit(item)"></button
                ></small>

                <div class="member-info">
                  <h4>{{ item.spotTitle }}</h4>
                  <hr />
                  <p>{{ item.addr1 }}</p>
                </div>
              </div>
            </a>
          </draggable>
        </div>
      </div>
    </section>
  </main>
  <!-- End sidebar -->
</template>

<script>
//import { mapActions } from "vuex";
import http from "@/common/axios";
import draggable from "vuedraggable";
import { eventBus } from "@/main.js";

import Vue from "vue";
import VueAlertify from "vue-alertify";
import alertify from "alertifyjs";

Vue.use(VueAlertify);

export default {
  //emit: ["fmakerevent"],
  //props: ["routes"],
  name: "SideBar",
  components: {
    draggable,
  },
  computed: {},

  data() {
    return {
      data: JSON.parse(sessionStorage.getItem("userDto")),
      userSeq: "",
      searchWord: "",
      routeData: [],
      favoriteData: [],
      activeTab: true,
      ischeck_1: true,
      ischeck_2: false,
    };
  },

  methods: {
    InsertPlan() {
      this.$emit("insetPlan", this.routeData);
    },

    makeRoute() {
      this.$emit("makeRoute", this.routeData);
      //eventBus.$emit("make-Route", this.routeData);
      //console.log("makeRoute");
    },
    fmaker() {
      //eventBus.$emit("fmaker-event", this.favoriteData);
      this.$emit("fmakerevent", this.favoriteData);
    },
    changeTab(num) {
      if (num == 1) {
        this.fmaker();
        this.activeTab = false;
        this.ischeck_1 = false;
        this.ischeck_2 = true;
      } else if (num == 0) {
        this.makeRoute();
        this.activeTab = true;
        this.ischeck_1 = true;
        this.ischeck_2 = false;
      }
    },
    addfavorit(post) {
      this.favoriteData.push(post);
    },
    routesDelete(index) {
      this.routeData.splice(index, 1);
    },
    favoriteDelete(index) {
      this.favoriteData.splice(index, 1);
    },
    searchTag(tagcode) {
      console.log(tagcode);
    },
    totripDetail(post) {
      console.log(post);
      this.detailPost(post);
      this.$router.push("/tripPlanDetail");
    },
    searchword() {
      //오류
      //결과를 받아와서  store의 detail을 수정하면
      //detail로 이동해서 값을 받아온다.
      console.log(this.searchWord);
      this.search(this.searchWord);
    },

    print() {
      console.log(this.routeData);
    },

    // 즐겨찾기 목록 가져오기
    async startList() {
      let response = await http.get("/star/" + this.userSeq);
      let { data } = response;
      console.log(data);

      this.favoriteData = data;
    },


    //즐겨찾기 insert
    async insertfavorit(post) {
      console.log("작동한다");
      console.log(post);

      let formData = new FormData();
      formData.append("userSeq", this.userSeq);
      formData.append("spotTitle", post.title);
      formData.append("addr1", post.addr1);
      formData.append("firstimg", post.firstimage);
      formData.append("mapx", post.mapx);
      formData.append("mapy", post.mapy);

      let options = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      let response = await http.post("/star", formData, options);
      let { data } = response;

      if (data == 0) {
        alertify.alert("이미 등록되었습니다.");
      } else {
        alertify.success("즐겨찾기 추가");
      }
      this.startList();
    },
    async deletefavorit(item) {
      let response = await http.delete("/star/" + this.userSeq + "/" + item.spotTitle);
      let { data } = response;
      if (data == 1) {
        alertify.success("즐겨찾기 삭제 완료");
      } else {
        alertify.success("즐겨찾기 삭제 실패");
      }
      this.startList();
    },
  },
  created() {
    eventBus.$on("send-plan", (routes) => {
      this.routeData.push(routes);
      console.log("출력하라");
    });
    this.userSeq = this.data.userSeq;
    this.startList();
  },
};
</script>

<style scoped>
@import "@/assets/css/card.css";

/*----------------------     */

@import url("https://fonts.googleapis.com/css?family=Abel");

* {
  padding: 0;
  margin: 0;
}
.check {
  background-color: #4298f3;
  color: white;
}
a {
  text-decoration: none;
  color: #666;
}
li {
  list-style: none;
}
body {
  background: #0137a1 url(https://tistory3.daumcdn.net/tistory/2808281/skin/images/background03.jpg) no-repeat center center fixed;
  background-size: cover;
  font-family: "Abel", sans-serif;
  font-size: 14px;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(50, 37, 11, 0.9);
  width: 100%;
  height: 100%;
}
#tab-menu {
  width: 600px;
  background: #eaa110;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translatex(-50%);
  border-radius: 4px;
}
#tab-btn ul {
  overflow: hidden;
}
#tab-btn li {
  float: left;
  width: 90px;
  text-align: center;
}
#tab-btn li a {
  display: block;
  color: #fff;
  padding: 15px 20px;
  font-weight: bold;
}
#tab-btn li.active a {
  border-bottom: 3px solid #2b210e;
  color: #2b210e;
}

#tab-cont {
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
}

/*--------------------------*/
#main {
  position: absolute;
  left: 100%;
  transform: translate(-100%, 0%);
  width: 400px;
  height: 100%;
  z-index: 2;
  padding-top: 30px;
}
.picture {
  border-radius: 70%;
}
section {
  background-color: rgba(255, 255, 255, 0.85);
  height: 100%;
  padding-top: 90px;
  padding-bottom: 30px;
}
.sortable-ghost {
  background: yellow;
}
.tags {
  margin-bottom: -10px;
}

.tags ul {
  list-style: none;
  padding: 0;
}

.tags ul li {
  display: inline-block;
}

.tags ul a {
  color: #515151;
  font-size: 14px;
  padding: 6px 14px;
  margin: 0 6px 8px 0;
  border: 1px solid #c4c4c4;
  display: inline-block;
  transition: 0.3s;
}

.tags ul a:hover {
  color: #fff;
  border: 1px solid #4298f3;
  background: #4298f3;
}

.tags ul a span {
  padding-left: 5px;
  color: #aaaaaa;
  font-size: 14px;
}

.hover:hover {
  color: #fff;
  border: 1px solid #4298f3;
  background: #4298f3;
}
.x-button {
  display: flex;
  right: 2px;
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

a {
  border: none;
  background: none;
}

/* 탭 버튼 */
.tab-buttons {
  display: flex;
}

.tab-buttons button {
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
