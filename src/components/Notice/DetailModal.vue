<template>
  <!-- Modal detail start -->
  <div class="modal fade" id="detailModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">상세보기</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <div class="example table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>글번호</td>
                  <td>{{ notice.noticeId }}</td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>{{ notice.title }}</td>
                </tr>
                <tr>
                  <td>내용</td>
                  <td v-html="notice.content"></td>
                </tr>
                <tr>
                  <td>작성일시</td>
                  <td>{{ notice.regDate }} {{ notice.regTime }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-show="notice.admin" class="container">
            <button v-show="notice.admin" @click="changeToUpdate" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button">글 수정하기</button>
            <button v-show="notice.admin" @click="changeToDelete" class="w-btn w-btn-red" data-bs-dismiss="modal" type="button">글 삭제하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal detail end -->
</template>

<script>
export default {
  props: ["notice"],
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
