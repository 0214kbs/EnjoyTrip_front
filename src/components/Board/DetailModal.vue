<template>
  <!-- Modal detail start -->
  <div class="modal fade" id="detailModal">
    <!-- <div class="modal-content"> -->
    <div class="modal-dialog modal-lg">
      <div style="background-color: white">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글 상세</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- <div class="example table-responsive"> -->
          <table class="table" style="border-collapse: collapse; width: 100%; height: 107px" border="1" data-ke-align="alignLeft">
            <tbody>
              <tr style="height: 20px">
                <td style="width: 16%; height: 20px; text-align: center"><b>글 번호</b></td>
                <td style="width: 10%; height: 20px">{{ board.boardId }}</td>
                <td style="width: 16%; height: 20px; text-align: center"><b>작성자</b></td>
                <td style="width: 16%; height: 20px">{{ board.userName }}</td>
                <td style="width: 16%; height: 20px; text-align: center"><b>작성 일시</b></td>
                <td style="width: 26%; height: 20px">{{ board.regDate }} {{ board.regTime }}</td>
              </tr>
              <tr style="height: 20px">
                <td style="width: 16.6667%; height: 20px; text-align: center"><b>제목</b></td>
                <td style="width: 83.3335%; height: 20px" colspan="5">{{ board.title }}</td>
              </tr>
              <tr style="height: 20px">
                <td style="width: 16.6667%; height: 20px; text-align: center"><b>내용</b></td>
                <td style="width: 83.3335%; height: 20px" colspan="5" v-html="board.content"></td>
              </tr>
              <tr style="height: 20px">
                <td style="height: 20px; text-align: left" colspan="6"><b>&nbsp; &nbsp; 첨부 파일</b></td>
                <td v-if="board.fileList.length > 0">
                  <tr>
                    <div v-for="(file, index) in board.fileList" :key="index">
                      <span class="fileName">{{ file.fileName }}</span>
                      &nbsp;&nbsp;
                      <a type="button" class="btn btn-outline btn-default btn-xs" v-bind:href="file.fileUrl" v-bind:download="file.fileName">내려받기</a>
                    </div>
                  </tr>
                </td>
              </tr>
              <!-- <tr v-if="board.fileList.length > 0">
                <td colspan="2">
                  <div v-for="(file, index) in board.fileList" :key="index">
                    <span class="fileName">{{ file.fileName }}</span>
                    &nbsp;&nbsp;
                    <a type="button" class="btn btn-outline btn-default btn-xs" v-bind:href="file.fileUrl" v-bind:download="file.fileName">내려받기</a>
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
        <button v-show="board.sameUser" @click="changeToUpdate" class="btn btn-sm btn-primary btn-outline" data-bs-dismiss="modal" type="button">
          글 수정하기
        </button>
        <button v-show="board.sameUser" @click="changeToDelete" class="btn btn-sm btn-warning btn-outline" data-bs-dismiss="modal" type="button">
          글 삭제하기
        </button>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- Modal detail end -->
</template>

<script>
export default {
  props: ["board"],
  methods: {
    changeToUpdate() {
      this.$emit("call-parent-change-to-update");
    },
    changeToDelete() {
      this.$emit("call-parent-change-to-delete");
    },
  },
};
</script>

<style scoped></style>
