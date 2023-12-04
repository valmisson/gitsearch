import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// CSS
import './assets/css/normalize.css'
import './assets/css/flexgrid.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
