import { createApp } from 'vue'
import App from './App.vue'
import globalComponent from '@/components/index'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(globalComponent)
app.mount('#app')
