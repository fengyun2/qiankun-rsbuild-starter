import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue';
import router from './router';
import './index.css';

const app = createApp(App)
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath
  if (!window.history.state.back) window.history.state.back = from.fullPath
  // 手动修改history的state
  return next()
})

app.use(ElementPlus);
app.use(router);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#root');
