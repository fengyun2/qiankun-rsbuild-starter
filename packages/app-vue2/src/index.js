import './public-path'
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import './index.css';

Vue.config.productionTip = false;

const isPro = process.env.NODE_ENV === 'production';

let router = null;
let instance = null;

function render(props) {
  const { container } = props;
  let baseRoute = '/';
  if (isPro && window.__POWERED_BY_QIANKUN__) {
    baseRoute = '/child-app-vue2/';
  } else if (isPro) {
    baseRoute = '/child/app-vue2/';
  } else if (!isPro && window.__POWERED_BY_QIANKUN__) {
    baseRoute = '/child/app-vue2/';
  }
  router = new VueRouter({
    base: baseRoute,
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container? container.querySelector('#root') : '#root');
}

if(!window.__POWERED_BY_QIANKUN__) {
  render({});
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

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

// new Vue({
//   el: '#root',
//   render: (h) => h(App),
// });
