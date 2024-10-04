import { Menu, Setting, Message, Link, Connection } from '@element-plus/icons-vue';

export const menuList = [
  {
    index: '1',
    title: '系统管理',
    iconComponent: Setting,
    children: [
      {
        index: '1-1',
        title: '用户管理',
        path: '/system/user',
      },
      {
        index: '1-2',
        title: '权限设置',
        children: [
          {
            index: '1-2-1',
            title: '角色管理',
            path: '/system/permissions/roles',
          },
          {
            index: '1-2-2',
            title: '权限列表',
            path: '/system/permissions/list',
          },
        ],
      },
    ],
  },
  {
    index: '2',
    title: '消息中心',
    iconComponent: Message,
    children: [
      {
        index: '2-1',
        title: '通知列表',
        path: '/notifications',
      },
    ],
  },
  {
    index: '3',
    title: '外部链接',
    iconComponent: Link,
    path: 'https://example.com',
    target: '_blank', // This is used for external links
  },
  {
    index: '4',
    title: 'app-vue2子应用',
    iconComponent: Menu,
    children: [
      {
        index: '4-1',
        title: '首页',
        // path: isDev ? '/child/app-vue2' : '/child-app-vue2',
        path: '/child/app-vue2',
      },
      {
        index: '4-2',
        title: '关于',
        // path: `${isDev ? '/child/app-vue2' : '/child-app-vue2'}/about`,
        path: '/child/app-vue2/about',
      }
    ],
  },
  {
    index: '5',
    title: 'app-vue3子应用',
    iconComponent: Connection,
    children: [
      {
        index: '5-1',
        title: '首页',
        // path: isDev ? '/child/app-vue3' : '/child-app-vue3',
        path: '/child/app-vue3',
      },
      {
        index: '5-2',
        title: '关于',
        // path: `${isDev ? '/child/app-vue3' : '/child-app-vue3'}/about`,
        path: '/child/app-vue3/about',
      },
      {
        index: '5-3',
        title: '仪表盘',
        // path: `${isDev? '/child/app-vue3' : '/child-app-vue3'}/dashboard`,
        path: '/child/app-vue3/dashboard',
      }
    ],
  }
]