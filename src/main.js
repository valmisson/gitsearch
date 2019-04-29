import Vue from 'vue'
import App from './App.vue'
import router from './routes'

// CSS
import './assets/css/normalize.css'
import './assets/css/flexgrid.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
