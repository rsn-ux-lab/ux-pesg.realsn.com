/* fonts */
import "./assets/fonts/NotoSansKR/NotoSansKR.css"; // NotoSansKR
import "./assets/fonts/Jost/Jost.css"; // NotoSansKR
import "./assets/scss/import.scss";

/* Lib */
import $ from "jquery";
window.$ = $;
require("./assets/js/libs/swiper/swiper@7.3.2.min.css");
window.Swiper = require("./assets/js/libs/swiper/swiper@7.3.2.min.js");

/* config */
import "./assets/js/config/files.js";

/* utils */
import "./assets/js/utils/utils";
import "./assets/js/utils/public";

/* plugins */
import "./assets/js/plugins/jquery";
import "./assets/js/plugins/public";

/* components */
import "./assets/js/components/forms";

/* Vue */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", async function (_e) {
  new Vue({
    el: "#wrap",
    router,
    render: (h) => h(App),
  }).$mount("#wrap");
});
