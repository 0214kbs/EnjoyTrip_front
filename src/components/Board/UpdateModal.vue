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

          <div class="mb-3">
            <h5>첨부 파일</h5>
            <div class="form-check">
              <input v-model="attachFile" class="form-check-input" type="checkbox" value="" id="chkFileUploadUpdate" />
              <label class="form-check-label" for="chkFileUploadUpdate">파일 변경</label>
            </div>
          </div>
          <div v-show="attachFile" class="mb-3" style="display: none" id="imgFileUploadUpdateWrapper">
            <input @change="changeFile" type="file" id="inputFileUploadUpdate" multiple />
            <div id="imgFileUploadUpdateThumbnail" class="thumbnail-wrapper">
              <img v-for="(file, index) in fileList" v-bind:key="index" v-bind:src="file" />
            </div>
          </div>

          <!-- button -->
          <div class="container">
            <button id="btnBoardUpdate" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button" @click="boardUpdate">수정</button>
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
  props: ["board"],
  data() {
    return {
      boardId: "",
      title: "",
      content: "",
      CKEditor: "",
      attachFile: false,
      fileList: [],
    };
  },
  methods: {
    changeFile(fileEvent) {
      this.fileList = [];
      const fileArray = Array.from(fileEvent.target.files); // Array 로 변환 가능
      fileArray.forEach((file) => {
        this.fileList.push(URL.createObjectURL(file));
      });
    },
    async boardUpdate() {
      let formData = new FormData();
      formData.append("boardId", this.boardId);
      formData.append("title", this.title);
      formData.append("content", this.CKEditor.getData());

      let files = document.querySelector("#inputFileUploadUpdate").files;

      const fileArray = Array.from(files); // Array 로 변환 가능
      fileArray.forEach((file) => formData.append("file", file));

      let options = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      let response = await http.post("/boards/" + this.boardId, formData, options);
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
    board: function () {
      // board props를 watch 하면서 board가 변경되면 그 시점에 board props -> boardId, ... data() 항목을 갱신
      this.boardId = this.board.boardId;
      this.title = this.board.title;
      this.CKEditor.setData(this.board.content);

      this.attachFile = false;
      (this.fileList = []), (document.querySelector("#inputFileUploadUpdate").value = "");
    },
  },
};
</script>

<style scoped>
/*CKEditor Height*/
.modal >>> .ck-editor__editable {
  width: 100%;
  height: 150px;
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

label {
  position: static;
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
