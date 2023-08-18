import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import './assets/style/style.css'
createApp(App).use(store).use(router).mount('#app')
