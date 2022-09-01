/* fonts */
// import "./assets/fonts/NotoSansKR/NotoSansKR.css"; // NotoSansKR
import "./assets/fonts/Jost/Jost.css"; // NotoSansKR

/* scss */
// import "./assets/scss/import.scss";

/* Lib */
import $ from "jquery";
window.$ = $;
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#wrap",
  router,
  render: (h) => h(App),
}).$mount("#wrap");
