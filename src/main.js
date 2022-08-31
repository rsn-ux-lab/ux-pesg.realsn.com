import "./assets/js/import"
import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
window.$ = $

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')