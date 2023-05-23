<template>
  <!-- Modal detail start -->
  <div class="modal fade" id="detailModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">상세보기</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
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
          <button
            v-show="notice.admin"
            @click="changeToUpdate"
            class="btn btn-sm btn-primary btn-outline"
            data-bs-dismiss="modal"
            type="button"
          >
            글 수정하기
          </button>
          <button
            v-show="notice.admin"
            @click="changeToDelete"
            class="btn btn-sm btn-warning btn-outline"
            data-bs-dismiss="modal"
            type="button"
          >
            글 삭제하기
          </button>
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

<style scoped></style>
