import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/style.css'
import router from '@/router'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
