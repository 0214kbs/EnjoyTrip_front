<template>
  <main id="main">
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
          <!-- <small>{{item.title}}</small> -->
        </a>
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
import {eventBus} from "@/main.js";

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
  created(){
    eventBus.$on('send-routes',routes =>{
      this.routeData = routes;
    });
  }
};
</script>

<style scoped>
#main {
  position: absolute;
  width: 500px;
  z-index: 2;
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
</style>
