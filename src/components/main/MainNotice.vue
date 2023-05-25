<template>
  <div>
    <details>
      <summary>
        공지 사항
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
          <circle cx="128" cy="180" r="12"></circle>
          <path
            d="M127.9995,144.0045v-8a28,28,0,1,0-28-28"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
      </summary>

      <!-- 세부내용 start-->
      <div>
        <h2>공지 사항</h2>
        <!-- <p>공지할 내용이 뭐가 있지</p> -->
        <!-- <p v-html="notice.content"></p> -->
        <p>
          <table class="table">
            <tbody>
              <tr>
                <td style="color: #1e1e27; font-size: x-large; width: 20%;">제목</td>
                <!-- <td style="color: #95a3b9; font-size: large;"> 공지사항3 </td> -->
                <td style="color: #1e1e27; font-size: large;">{{ notice.title }}</td>
              </tr>
              <tr>
                <td style="color: #1e1e27; font-size: x-large; width: 20%;">내용</td>
                <!-- <td style="color: #95a3b9; font-size: large;"> 가장 최근 공지사항 내용 <br>랄랄랄랄 </td> -->
                <td style="color: #1e1e27; font-size: large;" v-html="notice.content"></td>
              </tr>
            </tbody>
          </table>
        </p>
      </div>
      <!-- 세부내용 end-->
    </details>
  </div>
</template>

<script>
import http from "@/common/axios";

export default {
// notice try
  data() {
    return {
      mainNotice: null,
      // detail
      notice: {
        noticeId: 0,
        title: "",
        content: "",
        regDate: "",
        regTime: "",
        admin: false,
      },
    };
  },
  methods: {
    async noticeListRecent() {

      let response = await http.get("/notices/recent");
      let { data } = response;
      console.log("noticeList");
      console.log(data);
      this.notice = data.dto;
      console.log(data.title);
    },
  },
  created() {
    this.noticeListRecent();
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
*,
*:after,
*:before {
  box-sizing: border-box;
}

strong {
  font-weight: 600;
}

details {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  margin-top: 2rem;
  color: #6b7280;
  display: flex;
  flex-direction: column;
}
/* 1e1e27 */
details div { 
  background-color: #4298f3a1;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  padding: 1.25rem;
  border-radius: 8px;
  position: absolute;
  max-height: calc(100vh - 100px);
  width: 450px;
  max-width: calc(100vw - 2rem);
  bottom: calc(100% + 1rem);
  right: 0;
  overflow: auto;
  transform-origin: 100% 100%;
  color: #95a3b9;
}
details div::-webkit-scrollbar {
  width: 15px;
  background-color: #1e1e27;
}
details div::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 99em;
  background-color: #95a3b9;
  border: 5px solid #1e1e27;
}
details div > * + * {
  margin-top: 0.75em;
}
details div p > code {
  font-size: 1rem;
  font-family: monospace;
}
details div h2 {
  color: #1e1e27;
}

details div pre {
  white-space: pre-line;
  border: 1px solid #95a3b9;
  border-radius: 6px;
  font-family: monospace;
  padding: 0.75em;
  font-size: 0.875rem;
  color: #fff;
}
details[open] div {
  animation: scale 0.25s ease;
}
summary {
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0.75em 3em 0.75em 1.25em;
  border-radius: 99em;
  color: #fff;
  background-color: #4298f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: 0.15s ease;
  position: relative;
}
summary::-webkit-details-marker {
  display: none;
}
summary:hover,
summary:focus {
  background-color: #4298f3;
}
summary svg {
  position: absolute;
  right: 1.25em;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5em;
  height: 1.5em;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
