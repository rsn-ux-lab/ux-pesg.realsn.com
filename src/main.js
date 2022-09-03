/* fonts */
import "./assets/fonts/NotoSansKR/NotoSansKR.css"; // NotoSansKR
import "./assets/fonts/Jost/Jost.css"; // NotoSansKR
import "./assets/scss/import.scss";

/* Lib */
import $ from "jquery";
window.$ = $;

/* config */
import "./assets/js/config/files.js";

/* utils */
import "./assets/js/utils/utils";

/* plugins */
import "./assets/js/plugins/plugins";

/* components */
import "./assets/js/components/forms";
// import "./components/layer";

/* pages */
import "./assets/js/pages/common";

/* Vue */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", async function (event) {
  new Vue({
    el: "#wrap",
    router,
    render: (h) => h(App),
  }).$mount("#wrap");
});
