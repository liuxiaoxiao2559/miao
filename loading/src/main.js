import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $loading from './components/index.js'
import './assets/css/base.css'
import './assets/css/reset.css'
import './assets/js/index.js'
Vue.use($loading)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
