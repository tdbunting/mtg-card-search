// import css
import './scss/main.scss'

import Vue from 'vue'
import BoostrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.scryfall.com'

Vue.config.productionTip = false
Vue.use(BoostrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
