<template>
  <div class="container mt-3">
    <!-- <div class="container mx-auto py-6 px-4" x-data="data()" x-cloak> -->
    <!-- datatables() -->
    <h1 class="text-2xl py-4 border-b mb-3">게시판</h1>
    <div class="mb-4 flex justify-between items-center">
      <!-- searchbar start -->
      <div class="flex-1 pr-4">
        <div class="relative md:w-1/3">
          <input
            type="search"
            class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Search..."
            v-model="searchWord"
            @keyup.enter="boardList"
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

<button class="button_1" @click="showInsertModal">글쓰기</button>
      <!-- display start -->
      <!-- <div>
        <div class="shadow rounded-lg flex">
          <div class="relative">
            <button
              @click.prevent="open = !open"
              class="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 md:hidden"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
              </svg>

              <span class="hidden md:block">Display</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              x-show="open"
              @click.open="false"
              class="z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden"
            >
              <template x-for="heading in headings">
                <label class="flex justify-start items-center text-truncate hover:bg-gray-100 px-4 py-2">
                  <div class="text-teal-600 mr-3">
                    <input type="checkbox" class="form-checkbox focus:outline-none focus:shadow-outline" checked @click="toggleColumn(heading.key)" />
                  </div>
                  <div class="select-none text-gray-700" x-text="heading.value"></div>
                </label>
              </template>
            </div>
          </div>
        </div>
      </div> -->
      <!-- display end -->
    </div>

    <!-- table start-->
    <div class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
      <table class="table table-hover" >
        <thead>
          <tr bgcolor="#e0eff7">
            <!-- <template x-for="heading in headings"> -->
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>작성일시</th>
            <!-- </template> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(board, index) in list" :key="index" @click="boardDetail(board.boardId)">
            <td>{{ board.boardId }}</td>
            <td>{{ board.title }}</td>
            <td>{{ board.userName }}</td>
            <td>{{ board.readCount }}</td>
            <td>{{ ListDate(board.regDt.date) }}</td>
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

    <insert-modal v-on:call-parent-insert="closeAfterInsert"></insert-modal>
    <detail-modal v-bind:board="board" v-on:call-parent-change-to-update="changeToUpdate" v-on:call-parent-change-to-delete="boardDelete"></detail-modal>
    <update-modal v-bind:board="board" v-on:call-parent-update="closeAfterUpdate"></update-modal>
  </div>
  <!-- </div> -->
</template>

<script>
import http from "@/common/axios";
import util from "@/common/util";

import InsertModal from "@/components/modal/board_modal/InsertModal.vue";
import DetailModal from "@/components/modal/board_modal/DetailModal.vue";
import UpdateModal from "@/components/modal/board_modal/UpdateModal.vue";
import PaginationUI from "@/components/Board/PaginationUI.vue";

import { Modal } from "bootstrap";

export default {
  // datatables 선언 start
  // datatables() {
  //   return {
  //     headings: [
  //       {
  //         key: "boardId",
  //         value: "Num #",
  //       },
  //       {
  //         key: "title",
  //         value: "Subject",
  //       },
  //       {
  //         key: "userName",
  //         value: "Poster",
  //       },
  //       {
  //         key: "regDate",
  //         value: "Date",
  //       },
  //       {
  //         key: "readCount",
  //         value: "Hit",
  //       },
  //     ],
  //   };
  // },
  // board data 받는 거 추가해야함(display 적용하려면)
  // datatables 선언 end 

  components: { InsertModal, DetailModal, UpdateModal, PaginationUI },
  data() {
    return {

      // modal
      insertModal: null,
      detailModal: null,
      updateModal: null,

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
      board: {
        boardId: 0,
        title: "",
        content: "",
        userName: "",
        regDate: "",
        regTime: "",
        readCount: 0,
        fileList: [],
        sameUser: false,
      },
    };
  },
  methods: {
    async boardList() {
      let params = {
        limit: this.limit,
        offset: this.offset,
        searchWord: this.searchWord,
      };
      let response = await http.get("/boards", { params });
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
      this.boardList();
    },
    async boardDetail(boardId) {
      let response = await http.get("/boards/" + boardId);
      let { data } = response;

      console.log(data);

      //
        let { regDt } = data.dto;
        let boardNew = {
          regDate: util.makeDateStr(regDt.date.year, regDt.date.month, regDt.date.day, "."),
          regTime: util.makeTimeStr(regDt.time.hour, regDt.time.minute, regDt.time.second, ":"),
          ...data.dto,
        };

        this.board = boardNew;

        this.detailModal.show();

      // if (data.result == "login") {
      //   this.$router.push("/login");
      // } else {
      //   let { regDt } = data.dto;
      //   let boardNew = {
      //     regDate: util.makeDateStr(regDt.date.year, regDt.date.month, regDt.date.day, "."),
      //     regTime: util.makeTimeStr(regDt.time.hour, regDt.time.minute, regDt.time.second, ":"),
      //     ...data.dto,
      //   };

      //   this.board = boardNew;

      //   this.detailModal.show();
      // }
    },
    showInsertModal() {
      this.insertModal.show();
    },
    closeAfterInsert() {
      this.insertModal.hide();
      this.boardList();
    },
    closeAfterUpdate() {
      this.updateModal.hide();
      this.boardList();
    },
    changeToUpdate() {
      this.detailModal.hide();
      this.updateModal.show();
    },
    changeAfterUpdate() {
      this.updateModal.hide();
      this.boardList();
    },
    changeToDelete() {
      this.detailModal.hide();

      var $this = this; 
      this.$alertify.confirm(
        "이 글을 삭제하시겠습니까?",
        function () {
          $this.boardDelete();
        },
        function () {
          console.log("cancel");
        }
      );
    },
    async boardDelete() {
      try {
        console.log("board delete");
        let response = await http.delete("/boards/" + this.board.boardId);
        let { data } = response;
        console.log(data);

        if (data.result == "login") {
          this.$router.push("/login");
        } else {
          this.$alertify.success("글이 삭제되었습니다.");
          this.boardList();
        }
      } catch (error) {
        console.log("error");
      }
    },
  },
  created() {
    this.boardList();
  },
  mounted() {
    this.insertModal = new Modal(document.querySelector("#insertModal"));
    this.detailModal = new Modal(document.querySelector("#detailModal"));
    this.updateModal = new Modal(document.querySelector("#updateModal"));
  },
};
</script>

<style scoped>
button.button_1 {
  border: 0;
  outline: none;
  font-size: 15px;
  background:#5FA8D3;
  color: #E7ECEF;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
}


</style>
