import './public-path'
import { createApp } from 'vue';
import type { App as VueApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import type { RouterHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import globalComponents from '@/components';
import App from './App.vue';
import routes from './router';
import './index.css';

// const isPro = process.env.NODE_ENV === 'production';

interface MountProps {
  container?: HTMLElement;
  routerBase?: string;
  onGlobalStateChange?: unknown;
  setGlobalState?: unknown;
}

let router = null;
let instance: VueApp | null = null;
let history: RouterHistory | null = null;

function render(props: MountProps = {}) {
  const { container, routerBase } = props;
  // let baseRoute = '/';
  // if (isPro && window.__POWERED_BY_QIANKUN__) {
  //   baseRoute = '/child-app-vue3/';
  // } else if (isPro) {
  //   baseRoute = '/child/app-vue3/';
  // } else if (!isPro && window.__POWERED_BY_QIANKUN__) {
  //   baseRoute = '/child/app-vue3/';
  // }
  const baseRoute = window.__POWERED_BY_QIANKUN__? routerBase || '/' : '/';
  history = createWebHistory(baseRoute);
  router = createRouter({
    history,
    routes,
  });
  instance = createApp(App);
  instance.use(router);
  instance.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    instance.component(key, component)
  }
  instance.use(globalComponents);
  instance.mount(container? container.querySelector('#root') : '#root');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'app-vue3 bootstraped');
}

function storeTest(props: MountProps) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function mount(props: MountProps) {
  storeTest(props);
  render(props);
  if (instance) {
    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
  }
}

export async function unmount() {
  if (instance) {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
  }
  router = null;
  history?.destroy();
}

// createApp(App).mount('#root');
