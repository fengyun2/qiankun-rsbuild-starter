// @ts-nocheck
const isDev = process.env.NODE_ENV === 'development';
const appVue3Entry = isDev ? '//localhost:3006' : '/app-vue3/index.html'; // app-vue3子应用入口，本地环境下指定端口
const appVue3ActiveRule = isDev ? '/app/app-vue3' : '/dist/app/app-vue3'; // 子应用激活规则，本地环境下指定端口, /dist/是主应用的base
const appVue2Entry = isDev ? '//localhost:3007' : '/app-vue2/index.html'; // app-vue2子应用入口，本地环境下指
const appVue2ActiveRule = isDev ? '/app/app-vue2' : '/dist/app/app-vue2'; // 子应用激活规则，本地环境下指定端口, /dist/是主应用的base

export default {
  subApps: [
    {
      name: 'app-vue3', // 子应用名称，跟package.json一致
      entry: appVue3Entry, // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: appVue3ActiveRule, // 子应用激活规则
      props: {}, // 主应用与子应用通信传值
    },
    {
      name: 'app-vue2', // 子应用名称，跟package.json一致
      entry: appVue2Entry, // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: appVue2ActiveRule, // 子应用激活规则
      props: {}, // 主应用与子应用通信传值
    },
  ],
};