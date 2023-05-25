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
            <div id="divEditorInsert"></div>
            <!-- / New for FileUpload, CKEditor -->
          </div>

  
          <button id="btnBoardInsert" class="btn btn-sm btn-primary btn-outline float-end" data-bs-dismiss="modal" type="button" @click="boardInsert">
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
  props:["routeData"],

  data() {
    return {
      title: "",
      CKEditor: "",
      attachFile: false,
      fileList: [],

      id:0,
    };
  },
  methods: {
    initUI() {
      this.title = "";
      this.CKEditor.setData("");
      this.attachFile = false;
      this.fileList = [];
      document.querySelector("#inputFileUploadInsert").value = "";
    },
    changeFile(fileEvent) {
      this.fileList = [];
      const fileArray = Array.from(fileEvent.target.files); // Array 로 변환 가능
      fileArray.forEach((file) => {
        this.fileList.push(URL.createObjectURL(file));
      });
    },
    async boardInsert() {
      // file upload - multipart/form-data
      // let formData = new FormData();
      // formData.append("title", this.title);
      // formData.append("content", this.CKEditor.getData());
      this.id = this.id + 1;
      var num = this.routeData.length;
      console.log(num);
     
      let response = await http.post("/course", {
        num : num,
        userCourseId:this.id,
        Allcourse : this.routeData,
        title: this.title,
        content: this.CKEditor.getData(),
      });

      let { data } = response;

      console.log(data);

      if (data.result == "fail") {
        this.$alertify.fail("경로 등록이 실패했습니다.");
      } else {
        this.$alertify.success("경로가 등록되었습니다.");
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
</style>
