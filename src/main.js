import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import DashboardLayout from './modules/layout/components/DashboardLayout.vue'
import EmptyLayout from './modules/layout/components/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(router)
app.use(store)

app.mount('#app')
