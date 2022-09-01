import $ from 'jquery'
window.$ = $
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/import'

Vue.config.productionTip = false

new Vue({
  el: '#wrap', 
  router,
  render: h => h(App),
}).$mount('#wrap')