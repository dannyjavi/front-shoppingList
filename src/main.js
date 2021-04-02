import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

window.axios = require('axios')

window.axios.defaults.baseURL = 'http://212.225.178.17:90/api/v1/'
//window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

// `headers` are custom headers to be sent
/* window.axios.defaults.headers= { 'X-Requested-With': 'XMLHttpRequest' },
 */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
