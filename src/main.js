import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './style/index.scss'
import installIcon from './icons'
import './permission'
import il8n from './il8n'

const app = createApp(App)
installElementPlus(app)
installIcon(app)
app.use(il8n).use(store).use(router).mount('#app')
