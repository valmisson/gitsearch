import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

// CSS
import './assets/css/normalize.css'
import './assets/css/flexgrid.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
