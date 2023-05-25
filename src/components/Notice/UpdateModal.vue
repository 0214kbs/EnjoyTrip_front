<template>
  <!-- Modal update start -->
  <div class="modal fade" id="updateModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글수정</h4>
          <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <h5 for="titleUpdate" class="form-label">제목</h5>
            <input type="text" class="form-control" id="titleUpdate" v-model="title" />
          </div>

          <div class="mb-3">
            <h5 for="contentUpdate" class="form-label">내용</h5>
            <div id="divEditorUpdate"></div>
          </div>
          <div class="container">
            <button id="btnNoticeInsert" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button" @click="noticeInsert">수정</button>
            <button type="button" class="w-btn w-btn-gray" data-bs-dismiss="modal">취소</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal update end -->
</template>

<script>
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VueAlertify from "vue-alertify";

Vue.use(CKEditor).use(VueAlertify);
import http from "@/common/axios";

export default {
  props: ["notice"],
  data() {
    return {
      noticeId: "",
      title: "",
      content: "",
      CKEditor: "",
    };
  },
  methods: {
    async noticeUpdate() {
      let formData = new FormData();
      formData.append("noticeId", this.noticeId);
      formData.append("title", this.title);
      formData.append("content", this.CKEditor.getData());

      let options = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      let response = await http.post("/notices/" + this.noticeId, formData, options);
      let { data } = response;

      console.log(data);

      if (data.result == "login") {
        this.$router.push("/login");
      } else {
        this.$alertify.success("글이 수정되었습니다.");
        this.closeModal();
      }
    },

    closeModal() {
      this.$emit("call-parent-update");
    },
  },
  async mounted() {
    try {
      this.CKEditor = await ClassicEditor.create(document.querySelector("#divEditorUpdate"));
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    notice: function () {
      // notice props를 watch 하면서 notice가 변경되면 그 시점에 notice props -> noticeId, ... data() 항목을 갱신
      this.noticeId = this.notice.noticeId;
      this.title = this.notice.title;
      this.CKEditor.setData(this.notice.content);
    },
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
