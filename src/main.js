import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from './assets/css/reset.css'
import axios from 'axios'
//стили сюда

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  reset,
  render: h => h(App)
}).$mount('#app')
