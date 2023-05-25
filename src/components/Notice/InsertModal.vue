<template>
  <div class="modal" id="insertModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글쓰기</h4>
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
          <div class="container">
            <button id="btnNoticeInsert" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button" @click="noticeInsert">등록</button>
            <button type="button" class="w-btn w-btn-gray" data-bs-dismiss="modal">취소</button>
          </div>
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
      content: "",
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

<style scoped>
.w-btn {
  position: relative;
  border: none;
  display: inline-block;
  padding: 6px 20px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
}

.w-btn-outline {
  position: relative;
  padding: 6px 20px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
}

.w-btn-blue {
  background-color: #4298f3;
  color: #deeaf2;
}

.w-btn-gray {
  background-color: #828a93;
  color: #deeaf2;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
