<template>
  <!-- Modal update start -->
  <div class="modal fade" id="updateModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글수정</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="titleUpdate" class="form-label">제목</label>
            <input type="text" class="form-control" id="titleUpdate" v-model="title" />
          </div>

          <div class="mb-3">
            <div id="divEditorUpdate"></div>
          </div>
          <button @click="noticeUpdate" id="btnNoticeUpdate" class="btn btn-sm btn-primary btn-outline float-end" data-bs-dismiss="modal" type="button">
            수정
          </button>
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

/*파일업로드 thumbnail*/
.modal >>> .thumbnail-wrapper {
  margin-top: 5px;
}

.modal >>> .thumbnail-wrapper img {
  width: 100px !important;
  margin-right: 5px;
  max-width: 100%;
}
</style>
