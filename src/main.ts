import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

;(window as Window & { isMbscDemo?: boolean }).isMbscDemo = true

const app = createApp(App)

app.use(router)

app.mount('#app')
