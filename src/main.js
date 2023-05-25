import Vue from "vue";
import App from "./App.vue";
import router from "./routers/routers.js";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* 아이콘 써보려고 받는거 */
import { library } from "@fortawesome/fontawesome-svg-core";

/* 
   import specific icons 
   원하는 아이콘을 개별적으로 import
*/
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome 컴포넌트 */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add(faUserSecret);

/* font awesome 컴포넌트를 전역으로 등록 */
Vue.component("font-awesome-icon", FontAwesomeIcon);

export const eventBus = new Vue();
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
