<template>
  <!-- Modal detail start -->
  <div class="modal fade" id="detailModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">공지사항</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <h5>{{ notice.title }}</h5>
          <p>{{ notice.regDate }}{{ notice.regTime }}</p>
          <div class="box">
            <h6 v-html="notice.content"></h6>
          </div>
        </div>
        <div v-show="notice.admin" class="container">
          <button v-show="notice.admin" @click="changeToUpdate" class="w-btn w-btn-blue" data-bs-dismiss="modal" type="button">글 수정하기</button>
          <button v-show="notice.admin" @click="changeToDelete" class="w-btn w-btn-red" data-bs-dismiss="modal" type="button">글 삭제하기</button>
        </div>
        <!-- </div> -->
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

.box {
  border: 0.3px solid black;
  border-radius: 5px;
  padding: 10px;
  height: auto;
  min-height: 200px;
}
</style>
