import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useDeviceStore } from './stores/device'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 初始化设备检测
const deviceStore = useDeviceStore(pinia)
deviceStore.detectDevice()

app.mount('#app')
