import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './route/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
