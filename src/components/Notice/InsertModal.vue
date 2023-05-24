<template>
  <div class="modal" id="insertModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글쓰기</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <h5 for="titleInsert" class="form-label">제목</h5>
            <input type="text" class="form-control" id="titleInsert" v-model="title" />
          </div>
          <div class="mb-3">
            <h5 for="contentInsert" class="form-label">내용</h5>
          </div>
          <div id="divEditorInsert"></div>
          <button id="btnNoticeInsert" class="btn btn-sm btn-primary btn-outline float-end" data-bs-dismiss="modal" type="button" @click="noticeInsert">
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VueAlertify from "vue-alertify";

Vue.use(CKEditor).use(VueAlertify);

import http from "@/common/axios";

export default {
  data() {
    return {
      title: "",
      CKEditor: "",
    };
  },
  methods: {
    initUI() {
      this.title = "";
      this.CKEditor.setData("");
    },
    async noticeInsert() {
      // file upload - multipart/form-data
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.CKEditor.getData());

      // let options = {
      //   headers: { "Content-Type": "multipart/form-data" },
      // };
      // let response = await http.post("/notices", formData, options);
      let response = await http.post("/notices", formData);
      let { data } = response;

      console.log(data);

      if (data.result == "login") {
        this.$router.push("/login");
      } else {
        this.$alertify.success("글이 등록되었습니다.");
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit("call-parent-insert");
    },
  },
  async mounted() {
    try {
      this.CKEditor = await ClassicEditor.create(document.querySelector("#divEditorInsert"));
    } catch (error) {
      console.error(error);
    }

    // 부트스트랩 모달 이벤트 중 show 이벤트를 이용
    let $this = this;
    this.$el.addEventListener("show.bs.modal", function () {
      $this.initUI();
    });
  },
};
</script>

<style scoped>
/*CKEditor Height*/
.modal >>> .ck-editor__editable {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
}
</style>
