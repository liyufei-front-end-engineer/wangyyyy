import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// 导入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局使用element-icon
import * as ElIcons from '@element-plus/icons-vue'
for (const name in ElIcons){
    app.component(name,(ElIcons as any)[name])
}

app.use(store).use(router).use(ElementPlus).mount('#app')
