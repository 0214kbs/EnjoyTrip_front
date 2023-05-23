<template>
  <div class="container mt-3">
    <!-- <div class="container mx-auto py-6 px-4" x-data="data()" x-cloak> -->
    <!-- datatables() -->
    <br />
    <br />
    <br />
    <h1 class="text-2xl py-4 border-b mb-3">공지사항</h1>
    <div class="mb-4 flex justify-between items-center">
      <!-- searchbar start -->
      <div class="flex-1 pr-4">
        <div class="relative md:w-1/3">
          <input
            type="search"
            class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Search..."
            v-model="searchWord"
            @keyup.enter="noticeList"
          />
          <div class="absolute top-0 left-0 inline-flex items-center p-2">
            <!-- 검색 아이콘 -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        </div>
      </div>
      <!-- searchbar end -->

      <!-- <button class="button_1" @click="showInsertModal">글쓰기</button> -->
    </div>

    <!-- table start-->
    <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
      <table
        class="table table-hover"
        style="border-collapse: collapse; width: 100%; height: 102px"
        border="1"
        data-ke-align="alignLeft"
        data-ke-style="style12"
      >
        <thead>
          <tr bgcolor="#e0eff7">
            <!-- <template x-for="heading in headings"> -->
            <th style="width: 7.55811%; height: 17px; text-align: center">#</th>
            <th style="width: 33.6047%; height: 17px; text-align: center">제목</th>
            <th style="width: 20%; height: 17px; text-align: center">작성일시</th>
            <!-- </template> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notice, index) in list" :key="index" @click="noticeDetail(notice.noticeId)">
            <td style="text-align: center">{{ notice.noticeId }}</td>
            <td style="padding-left: 100px">{{ notice.title }}</td>
            <td style="text-align: center">{{ ListDate(notice.regDt.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table end-->
    <br />
    <br />
    <PaginationUI
      v-bind:listRowCount="listRowCount"
      v-bind:pageLinkCount="pageLinkCount"
      v-bind:currentPageIndex="currentPageIndex"
      v-bind:totalListItemCount="totalListItemCount"
      v-on:call-parent-move-page="movePage"
    >
    </PaginationUI>

    <detail-modal v-bind:notice="notice"></detail-modal>
  </div>
  <!-- </div> -->
</template>

<script>
import http from "@/common/axios";
import util from "@/common/util";

// import InsertModal from "@/components/Notice/InsertModal.vue";
import DetailModal from "@/components/Notice/DetailModal.vue";
// import UpdateModal from "@/components/Notice/UpdateModal.vue";
import PaginationUI from "@/components/PaginationUI.vue";

import { Modal } from "bootstrap";

export default {
  //   components: { InsertModal, DetailModal, UpdateModal, PaginationUI },
  components: { DetailModal, PaginationUI },
  data() {
    return {
      // modal
      // insertModal: null,
      detailModal: null,
      //   updateModal: null,

      // list
      list: [],
      limit: 10,
      offset: 0,
      searchWord: "",

      // pagination
      listRowCount: 10,
      pageLinkCount: 10,
      currentPageIndex: 1,
      totalListItemCount: 0,

      // detail
      notice: {
        noticeId: 0,
        title: "",
        content: "",
        regDate: "",
        regTime: "",
        isAdmin: false,
      },
    };
  },
  methods: {
    async noticeList() {
      let params = {
        limit: this.limit,
        offset: this.offset,
        searchWord: this.searchWord,
      };
      let response = await http.get("/notices", { params });
      let { data } = response;

      console.log(data);

      //
      this.list = data.list;
      this.totalListItemCount = data.count;

      // if (data.result == "login") {
      //   this.$router.push("/login");
      // } else {
      //   this.list = data.list;
      //   this.totalListItemCount = data.count;
      // }
    },
    ListDate: function (date) {
      return util.makeDateStr(date.year, date.month, date.day, ".");
    },
    movePage(pageIndex) {
      this.offset = (pageIndex - 1) * this.listRowCount;
      this.currentPageIndex = pageIndex;
      this.noticeList();
    },
    async noticeDetail(noticeId) {
      let response = await http.get("/notices/" + noticeId);
      let { data } = response;

      console.log(data);

      //
      let { regDt } = data.dto;
      let noticeNew = {
        regDate: util.makeDateStr(regDt.date.year, regDt.date.month, regDt.date.day, "."),
        regTime: util.makeTimeStr(regDt.time.hour, regDt.time.minute, regDt.time.second, ":"),
        ...data.dto,
      };

      this.notice = noticeNew;

      this.detailModal.show();
    },
  },
  created() {
    this.noticeList();
  },
  mounted() {
    //this.insertModal = new Modal(document.querySelector("#insertModal"));
    this.detailModal = new Modal(document.querySelector("#detailModal"));
    // this.updateModal = new Modal(document.querySelector("#updateModal"));
  },
};
</script>

<style scoped>
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
</style>
