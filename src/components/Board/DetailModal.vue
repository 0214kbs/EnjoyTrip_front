<template>
  <!-- Modal detail start -->
  <div class="modal fade" id="detailModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">글 상세</h4>
          <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <div class="example table-responsive">
            <table class="table" style="border-collapse: collapse; width: 100%; height: 107px" border="1" data-ke-align="alignLeft">
              <tbody>
                <tr style="height: 20px">
                  <td style="width: 15%; height: 20px; text-align: center">
                    <b># {{ board.boardId }}</b>
                  </td>
                  <!-- <td style="width: 10%; height: 20px">{{ board.boardId }}</td> -->
                  <td style="width: 15%; height: 20px; text-align: center" colspan="2"><b>작성자</b></td>
                  <td style="width: 14%; height: 20px">{{ board.userName }}</td>
                  <td style="width: 18%; height: 20px; text-align: center"><b>작성 일시</b></td>
                  <td style="width: 23%; height: 20px">{{ board.regDate }}</td>
                </tr>
                <tr style="height: 20px">
                  <td style="width: 16.6667%; height: 20px; text-align: center"><b>제목</b></td>
                  <td style="width: 83.3335%; height: 20px" colspan="5">{{ board.title }}</td>
                </tr>
                <tr style="height: 20px">
                  <td style="width: 16.6667%; height: 20px; text-align: center"><b>내용</b></td>
                  <td style="width: 83.3335%; height: 20px" colspan="5" v-html="board.content"></td>
                </tr>
                <!-- <tr style="height: 20px">
                <td style="height: 20px; text-align: center text-align: left; width: 16.6667%;"><b>첨부 파일</b></td>
                <td v-if="board.fileList.length > 0" colspan="5">
                  <span v-for="(file, index) in board.fileList" :key="index">
                    <span class="fileName">{{ file.fileName }}</span>
                    &nbsp;&nbsp;
                    <a type="button" class="btn btn-outline btn-default btn-xs" v-bind:href="file.fileUrl" v-bind:download="file.fileName">내려받기</a>
                  </span>
                </td>
              </tr> -->
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
          <div class="container">
            <button v-show="board.sameUser" @click="changeToUpdate" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button">글 수정</button>
            <button v-show="board.sameUser" @click="changeToDelete" class="w-btn w-btn-red" data-bs-dismiss="modal" type="button">글 삭제</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.w-btn-red {
  background-color: #f34242;
  color: #deeaf2;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
