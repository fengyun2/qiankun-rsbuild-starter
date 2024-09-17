import './public-path'
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue';
import routes from './router';
import './index.css';

// const isPro = process.env.NODE_ENV === 'production';

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
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
  instance.mount(container? container.querySelector('#root') : '#root');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'app-vue3 bootstraped');
}

function storeTest(props) {
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

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}

// createApp(App).mount('#root');
