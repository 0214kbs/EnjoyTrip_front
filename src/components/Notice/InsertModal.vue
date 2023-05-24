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
            <textarea rows="7" type="text" class="form-control" id="contentInsert" v-model="content" />
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
      this.content = "";
      // this.CKEditor.setData("");
    },
    async noticeInsert() {
      // file upload - multipart/form-data
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);

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
    // 부트스트랩 모달 이벤트 중 show 이벤트를 이용
    let $this = this;
    this.$el.addEventListener("show.bs.modal", function () {
      $this.initUI();
    });
  },
};
</script>

<style scoped></style>
