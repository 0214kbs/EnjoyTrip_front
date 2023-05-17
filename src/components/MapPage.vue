<template>
  <div class="col-md-9 mx-auto container mb-5">
    <br /><br /><br /><br /><br /><br />
    <div class="section-title">
      <h2 style="margin-top: 20px">지역별 관광 정보</h2>
      <form class="d-flex my-3">
        <select id="area1List" class="form-select me-2">
          <option value="">시도 선택</option>
        </select>
        <select id="area2List" class="form-select me-2">
          <option value="">구군 선택</option>
        </select>
        <select id="cat1List" class="form-select me-2">
          <option value="">대분류 선택</option>
        </select>
        <select id="cat2List" class="form-select me-2">
          <option value="">중분류 선택</option>
        </select>
        <select id="cat3List" class="form-select me-2">
          <option value="">소분류 선택</option>
        </select>
        <button type="button" class="btn btn-outline-success" id="btnSearch">검색</button>
      </form>

      <!-- kakao map start -->
      <MapKakao :latitude="37.39843974939604" :longitude="127.10972941510465" />
      <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>

      <!-- kakao map end -->
      <div id="map" class="mt-3" style="width: 100%; height: 400px"></div>

      <!-- 관광지 table -->
      <div id="table-container"></div>
      <!-- End 관광지 table -->
    </div>
  </div>
</template>

<script>
import MapKakao from "@/components/MapKakao.vue";
export default {
  components: {
    MapKakao,
  },
  // mounted() {
  //   this.initialize();
  // },
  // methods: {
  //   async initialize() {
  //     const mapContainer = document.getElementById("map");
  //     const mapOption = {
  //       center: new kakao.maps.LatLng(37.500613, 127.036431),
  //       level: 3,
  //     };
  //     const map = new kakao.maps.Map(mapContainer, mapOption);
  //     this.map = map;

  //     await this.getArea1List();
  //     await this.getCat1List();
  //   },
  //   async getArea1List() {
  //     const url = `/trip/area`;
  //     const urlParams = `?areaCode=`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);

  //     const codeList = data.response.body.items.item;
  //     console.log(codeList);

  //     let listHtml = `<option value=''>시도를 선택하세요</option>`;
  //     codeList.forEach((el) => {
  //       listHtml += `<option value='${el.code}'>${el.name}</option>`;
  //     });
  //     document.querySelector("#area1List").innerHTML = listHtml;
  //   },
  //   async getArea2List() {
  //     const areaCode = document.querySelector("#area1List").value;

  //     const url = `/trip/area`;
  //     const urlParams = `?areaCode=${areaCode}`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);

  //     const codeList = data.response.body.items.item;
  //     console.log(codeList);

  //     let listHtml = `<option value=''>구군을 선택하세요</option>`;
  //     codeList.forEach((el) => {
  //       listHtml += `<option value='${el.code}'>${el.name}</option>`;
  //     });
  //     document.querySelector("#area2List").innerHTML = listHtml;
  //   },
  //   async getCat1List() {
  //     const url = `/trip/category`;
  //     const urlParams = `?cat1=&cat2=`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);

  //     const codeList = data.response.body.items.item;
  //     console.log(codeList);

  //     let listHtml = `<option value=''>대분류 선택하세요</option>`;
  //     codeList.forEach((el) => {
  //       listHtml += `<option value='${el.code}'>${el.name}</option>`;
  //     });
  //     document.querySelector("#cat1List").innerHTML = listHtml;
  //   },
  //   async getCat2List() {
  //     const cat1 = document.querySelector("#cat1List").value;

  //     const url = `/trip/category`;
  //     const urlParams = `?cat1=${cat1}&cat2=`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);

  //     const codeList = data.response.body.items.item;
  //     console.log(codeList);

  //     let listHtml = `<option value=''>중분류 선택하세요</option>`;
  //     codeList.forEach((el) => {
  //       listHtml += `<option value='${el.code}'>${el.name}</option>`;
  //     });
  //     document.querySelector("#cat2List").innerHTML = listHtml;
  //   },
  //   async getCat3List() {
  //     const cat1 = document.querySelector("#cat1List").value;
  //     const cat2 = document.querySelector("#cat2List").value;

  //     const url = `/trip/category`;
  //     const urlParams = `?cat1=${cat1}&cat2=${cat2}`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);

  //     const codeList = data.response.body.items.item;
  //     console.log(codeList);

  //     let listHtml = `<option value=''>소분류 선택하세요</option>`;
  //     codeList.forEach((el) => {
  //       listHtml += `<option value='${el.code}'>${el.name}</option>`;
  //     });
  //     document.querySelector("#cat3List").innerHTML = listHtml;
  //   },
  //   handleArea1Change() {
  //     this.getArea2List();
  //   },
  //   handleCat1Change() {
  //     this.getCat2List();
  //   },
  //   async getList() {
  //     const areaCode = document.querySelector("#area1List").value;
  //     const sigunguCode = document.querySelector("#area2List").value;
  //     const cat1 = document.querySelector("#cat1List").value;
  //     const cat2 = document.querySelector("#cat2List").value;
  //     const cat3 = document.querySelector("#cat3List").value;

  //     const url = `/trip/list`;
  //     const urlParams = `?areaCode=${areaCode}&sigunguCode=${sigunguCode}&cat1=${cat1}&cat2=${cat2}&cat3=${cat3}`;

  //     const response = await fetch(url + urlParams);
  //     const data = await response.json();
  //     console.log(data);
  //     this.makeList(data);

  //     const itemList = data.response.body.items.item;
  //     console.log(itemList);
  //     this.makeTable(itemList.slice(0, 10));
  //   },
  //   makeList(data) {
  //     let trips = data.response.body.items.item;
  //     positions = [];
  //     trips.forEach((area) => {
  //       let markerInfo = {
  //         title: area.title,
  //         latlng: new kakao.maps.LatLng(area.mapy, area.mapx),
  //       };
  //       positions.push(markerInfo);
  //     });
  //     displayMarker();
  //   },
  //   makeTable(itemList) {
  //     // 기존에 존재하는 테이블 삭제
  //     let tableContainer = document.getElementById("table-container");
  //     let existingTable = tableContainer.querySelector("table");
  //     if (existingTable) {
  //       existingTable.remove();
  //     }

  //     // HTML 테이블 생성
  //     let table = document.createElement("table");
  //     table.classList.add("table", "table-striped", "table-hover");
  //     let headerRow = table.insertRow();
  //     headerRow.classList.add("table-dark");
  //     headerRow.insertCell().textContent = "번호";
  //     headerRow.insertCell().textContent = "관광지";
  //     headerRow.insertCell().textContent = "주소";

  //     // 추출한 10개의 데이터를 테이블에 추가
  //     for (let i = 0; i < itemList.length; i++) {
  //       let item = itemList[i];
  //       let row = table.insertRow();
  //       // 좌표값 저장
  //       row.setAttribute("data-x", item.mapx);
  //       row.setAttribute("data-y", item.mapy);
  //       // row 생성
  //       row.insertCell().textContent = i + 1;
  //       row.insertCell().textContent = item.title;
  //       row.insertCell().textContent = item.addr1;

  //       // 클릭 이벤트 추가
  //       row.addEventListener("click", function () {
  //         // 해당 row의 x, y 좌표 정보 추출
  //         let x = this.getAttribute("data-x");
  //         let y = this.getAttribute("data-y");

  //         console.log("x :" + x);
  //         console.log("y :" + y);
  //         // 이동할 위도 경도 위치를 생성합니다
  //         var moveLatLon = new kakao.maps.LatLng(y, x);

  //         // 지도 중심을 부드럽게 이동시킵니다
  //         // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  //         map.panTo(moveLatLon);
  //       });
  //     }

  //     // 테이블을 HTML에 삽입
  //     tableContainer.appendChild(table);
  //   },
  //   displayMarker() {
  //     const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  //     const imageSize = new kakao.maps.Size(24, 35);

  //     this.positions.forEach((position) => {
  //       const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  //       const marker = new kakao.maps.Marker({
  //         map: this.map,
  //         position: position.latlng,
  //         title: position.title,
  //         image: markerImage,
  //       });
  //     });

  //     this.map.setCenter(this.positions[0].latlng);
  //   },
  // },
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>
