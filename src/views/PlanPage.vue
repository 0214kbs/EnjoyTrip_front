<template>
  <div>
    <!-- Start Recent Work -->
    <section class="py-4 mt-7" id="Korea-trip">
      <div class="container">
        <div class="page-name">
          <span class="title">나의 일정</span>
          <router-link to="/map"><button class="button_1">+</button></router-link>
        </div>
        <hr />
        <div class="card-container wrap">
          <div class="card" v-for="(card, index) in this.routeList" :key="index">
            <div class="card-header">
              <h2 class="card-title">{{ card.title }}</h2>
            </div>

            <div class="card-body">
              <p class="card-text" v-html="card.content"></p>

              <div class="card-text" v-for="(route, index) in card.Allcourse" :key="index">
                <img :src="route.firstimage" width="100px" />
                <p>
                  {{ route.spotTitle }}
                </p>
                <p>
                  {{ route.addr1 }}
                </p>
              </div>
            </div>
            <button class="bi bi-file-x" @click="deletePlan(card.userCourseId)">삭제</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import http from "@/common/axios";

export default {
  data() {
    return {
      routeList: [],
    };
  },
  methods: {
    async planList() {
      console.log("sdfs");

      let response = await http.get("/course");

      let { data } = response;
      console.log(data.data);
      this.routeList = data.data;
    },
    async deletePlan(id) {
      let response = await http.delete("/course/" + id);
      response.data;
      this.planList();
    },
  },

  mounted() {
    this.planList();
  },
};
</script>

<style scoped>
span.title {
  font-size: 25px;
}
button.button_1 {
  border: 0;
  outline: none;
  font-size: 15px;
  background: #4298f3;
  color: #e7ecef;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
}
.page-name {
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
}
.card-container {
  display: flex;
  margin-left: 20px;
}
.card-container.wrap {
  flex-wrap: wrap;
}
.card {
  width: 250px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
}

.card-header {
  padding: 16px;
  border-bottom: 1px solid #ebebeb;
}

.card-title {
  font-size: 20px;
  color: #333333;
  margin: 0;
}

.card-body {
  padding: 16px;
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-text {
  margin-top: 8px;
  color: #666666;
  font-size: 14px;
  line-height: 1.4;
}
</style>
