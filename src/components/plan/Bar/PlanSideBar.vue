<template>
  <main id="main" style="float: right">
    <section>
      <div class="sidebar sidebar-fix">
        <h3 class="sidebar-title">Search</h3>
        <div class="sidebar-item search-form">
          <input type="text" v-model="searchWord" />
          <button @click="searchword"><i class="bi bi-search"></i></button>
        </div>

        <h3 class="sidebar-title">선택된 경로</h3>
        <div class="list-group mb-3">
          <draggable v-model="routeData" draggable=".record_list" @change="print">
            <!-- <div > -->

            <!--firstimage-->

            <a
              href="#"
              class="list-group-item list-group-item-action record_list team"
              v-for="(item, index) in routeData"
              :key="index"
            >
              <div class="member d-flex align-items-start">
                <small
                  ><button
                    type="button"
                    class="btn-close x-button"
                    aria-label="Close"
                    style="margin-right: 10px"
                    @click="routesDelete(index)"
                  ></button
                ></small>
                <div class="picture" style="width: 150px; overflow: hidden">
                  <img
                    :src="item.firstimage"
                    style="width: 150px; height: auto; object-fit: cover"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>{{ item.title }}</h4>
                  <span>Chief Executive Officer</span>
                  <p>{{ item.addr1 }}</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </a>
            <!--
            <a
              href="#"
              class="list-group-item list-group-item-action record_list hover"
              v-for="(item, index) in routeData"
              :key="index"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ item.title }}</h5>
                <small
                  ><button
                    type="button"
                    class="btn-close x-button"
                    aria-label="Close"
                    @click="routesDelete(index)"
                  ></button
                ></small>
              </div>
              <p class="mb-1">{{ item.addr1 }}</p>
               <small>{{item.title}}</small> 
            </a>-->
          </draggable>
        </div>

        <!-- End sidebar search formn-->

        <!-- End sidebar tags-->
      </div>
    </section>
  </main>
  <!-- End sidebar -->
</template>

<script>
//import { mapActions } from "vuex";

import draggable from "vuedraggable";
import { eventBus } from "@/main.js";

export default {
  //props: ["routes"],
  name: "SideBar",
  components: {
    draggable,
  },
  computed: {},

  data() {
    return {
      searchWord: "",
      routeData: [],
    };
  },

  methods: {
    routesDelete(index) {
      this.routeData.splice(index, 1);
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
  },
  created() {
    eventBus.$on("send-plan", (routes) => {
      this.routeData = routes;
    });
  },
};
</script>

<style scoped>
@import "@/assets/css/card.css";

#main {
  position: absolute;
  left: 100%;
  transform: translate(-100%, 0%);
  width: 400px;
  height: 100%;
  z-index: 2;
  padding-top: 60px;
}
section {
  background-color: rgba(255, 255, 255, 0.75);
  height: 100%;
}
.picture {
  border-radius: 70%;
}
section {
  background-color: rgba(255, 255, 255, 0.76);
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
</style>
