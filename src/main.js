import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

import Table from '@/components/Table'


const app = createApp(App)

app.component('v-table', Table)


app.use(store).use(router)
app.mount('#app')
