<template>
  <nav aria-label="Page navigation example">
  <div class="pagination pagination--center">

    <ul class="pagination">
      <li v-if="prev" class="page-item">
        <a class="page-link" aria-label="Previous" @click="pagenationChanged(startPageIndex - 1)">
          <span aria-hidden="true">«</span>
        </a>
      </li>

      <li
        v-for="index in endPageIndex - startPageIndex + 1"
        :key="index"
        v-bind:class="{ active: startPageIndex + index - 1 == currentPageIndex }"
        class="page-item"
      >
        <a @click="pagenationChanged(startPageIndex + index - 1)" class="page-link">{{
          startPageIndex + index - 1
        }}</a>
      </li>

      <li v-if="next" class="page-item">
        <a class="page-link" aria-label="Next" @click="pagenationChanged(endPageIndex + 1)">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </div>
  </nav>
</template>

<script>
export default {
  props: ["listRowCount", "pageLinkCount", "currentPageIndex", "totalListItemCount"],
  computed: {
    pageCount: function () {
      return Math.ceil(this.totalListItemCount / this.listRowCount);
    },
    startPageIndex: function () {
      if (this.currentPageIndex % this.pageLinkCount == 0) {
        return this.currentPageIndex - this.pageLinkCount + 1;
      } else {
        return Math.floor(this.currentPageIndex / this.pageLinkCount) * this.pageLinkCount + 1;
      }
    },
    endPageIndex: function () {
      let ret = 0;
      if (this.currentPageIndex % this.pageLinkCount == 0) {
        ret = this.currentPageIndex;
      } else {
        ret =
          Math.floor(this.currentPageIndex / this.pageLinkCount) * this.pageLinkCount +
          this.pageLinkCount;
      }

      return ret > this.pageCount ? this.pageCount : ret;
    },
    prev: function () {
      if (this.currentPageIndex <= this.pageLinkCount) {
        return false;
      } else {
        return true;
      }
    },
    next: function () {
      if (
        Math.floor(this.pageCount / this.pageLinkCount) * this.pageLinkCount <
        this.currentPageIndex
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    pagenationChanged(pageIndex) {
      this.$emit("call-parent-move-page", pageIndex);
    },
  },
};
</script>

<style scoped>
.page-link {
  color: #000; 
  background-color: #fff;
  border: 1px solid #ccc; 
}

.page-item.active .page-link {
 z-index: 1;
 color: white;
 font-weight:bold;
 background-color: #5FA8D3;
 border-color: #ccc;
 
}

.page-link:focus, .page-link:hover {
  color: #000;
  background-color: #fafafa; 
  border-color: #ccc;
}
.pagination.pagination--center {
  justify-content: center;
}
ul li {
  cursor: pointer;
}

</style>
