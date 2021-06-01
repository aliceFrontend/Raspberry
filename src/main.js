import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from './assets/css/reset.css'
import responsive from './assets/css/responsive.css'

//стили сюда

Vue.config.productionTip = false

new Vue({
  router,
  store,
  reset,
  responsive,
  render: h => h(App)
}).$mount('#app')
