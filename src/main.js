import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker.js'
import router from './router'
import store from './store'
import './tailwind.css'
import './assets/style.css'
import './assets/animations.css'

createApp(App).use(store).use(router).mount('#app')
