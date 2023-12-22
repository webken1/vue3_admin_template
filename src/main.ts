import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
const fun = () => {
  console.log('这是没有格式化的代码')
}
fun()
