// @ts-nocheck
const isDev = process.env.NODE_ENV === 'development';
// const appVue3Entry = isDev ? '//localhost:3006' : '/child/app-vue3/'; // app-vue3子应用入口，本地环境下指定端口，生产环境和output的publicPath(assetPrefix)一致
const appVue3Entry = isDev ? '//localhost:3006' : '//localhost:8011'; // app-vue3子应用入口，本地环境下指定端口，生产环境和output的publicPath(assetPrefix)一致
const appVue3ActiveRule = isDev ? '/child/app-vue3' : '/child/app-vue3'; // 子应用激活规则，本地环境下指定端口, activeRule 和 微应用路由的 base 一致(少最后一个/)
// const appVue2Entry = isDev ? '//localhost:3007' : '/child/app-vue2/'; // app-vue2子应用入口，本地环境下指定端口，生产环境和output的publicPath(assetPrefix)一致
const appVue2Entry = isDev ? '//localhost:3007' : '//localhost:8010'; // app-vue2子应用入口，本地环境下指定端口，生产环境和output的publicPath(assetPrefix)一致
const appVue2ActiveRule = isDev ? '/child/app-vue2' : '/child/app-vue2'; // 子应用激活规则，本地环境下指定端口, activeRule 和 微应用路由的 base 一致(少最后一个/)

export default {
  subApps: [
    {
      name: 'app-vue3', // 子应用名称，跟package.json一致
      entry: appVue3Entry, // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: appVue3ActiveRule, // 子应用激活规则
      props: {
        routerBase: appVue3ActiveRule + '/', // 子应用路由的 base
      }, // 主应用与子应用通信传值
    },
    {
      name: 'app-vue2', // 子应用名称，跟package.json一致
      entry: appVue2Entry, // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: appVue2ActiveRule, // 子应用激活规则
      props: {
        routerBase: appVue2ActiveRule + '/', // 子应用路由的 base
      }, // 主应用与子应用通信传值
    },
  ],
};