<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu :default-openeds="defaultOpeneds" :router="true">
        <template v-for="menu in menus" :key="menu.index">
          <el-sub-menu
            v-if="menu.children && menu.children.length"
            :index="menu.index"
          >
            <template #title>
              <el-icon><component :is="menu.iconComponent" /></el-icon>
              {{ menu.title }}
            </template>
            <template v-for="item in menu.children" :key="item.index">
              <el-menu-item v-if="!item.children" :index="item.path" @click="handleMenuClick(item)">
                {{ item.title }}
              </el-menu-item>
              <el-sub-menu v-else :index="item.index">
                <template #title>
                  {{ item.title }}
                </template>
                <el-menu-item
                  v-for="subItem in item.children"
                  :key="subItem.index"
                  :index="subItem.path"
                  @click="handleMenuClick(subItem)"
                >
                  {{ subItem.title }}
                </el-menu-item>
              </el-sub-menu>
            </template>
          </el-sub-menu>
          <el-menu-item
            v-else
            :index="menu.path"
            @click="handleMenuClick(menu)"
          >
            <el-icon><component :is="menu.iconComponent" /></el-icon>
            {{ menu.title }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { shallowRef, computed } from 'vue';
// import { useRouter } from 'vue-router';
// import { Menu, Setting, Message, Link, Connection } from '@element-plus/icons-vue';
import { routerGo } from '@/utils/utils';
import type { AppState, MenuItem } from '@/store/modules/app/types'
import { useAppStore } from '@/store';

// interface TopLevelMenuItem {
//   index: string;
//   title: string;
//   iconComponent: any;
//   children?: SubMenuItem[];
//   path?: string;
//   target?: string;
// }

// interface SubMenuItem {
//   index: string;
//   title: string;
//   children?: SubMenuItem[];
//   path?: string;
//   target?: string;
// }

defineOptions({
  name: 'ISideBar',
});

// const router = useRouter();
const appStore = useAppStore();
const defaultOpeneds = shallowRef<string[]>(['1', '3']);
const menus = computed<AppState['menuList']>(() => appStore.menuList);

// const isDev = process.env.NODE_ENV === 'development';
// window.__POWERED_BY_QIANKUN__

// function push(subapp: string) { history.pushState(null, subapp, subapp) }

// const menus = ref<TopLevelMenuItem[]>([
//   {
//     index: '1',
//     title: '系统管理',
//     iconComponent: Setting,
//     children: [
//       {
//         index: '1-1',
//         title: '用户管理',
//         path: '/system/user',
//       },
//       {
//         index: '1-2',
//         title: '权限设置',
//         children: [
//           {
//             index: '1-2-1',
//             title: '角色管理',
//             path: '/system/permissions/roles',
//           },
//           {
//             index: '1-2-2',
//             title: '权限列表',
//             path: '/system/permissions/list',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     index: '2',
//     title: '消息中心',
//     iconComponent: Message,
//     children: [
//       {
//         index: '2-1',
//         title: '通知列表',
//         path: '/notifications',
//       },
//     ],
//   },
//   {
//     index: '3',
//     title: '外部链接',
//     iconComponent: Link,
//     path: 'https://example.com',
//     target: '_blank', // This is used for external links
//   },
//   {
//     index: '4',
//     title: 'app-vue2子应用',
//     iconComponent: Menu,
//     children: [
//       {
//         index: '4-1',
//         title: '首页',
//         // path: isDev ? '/child/app-vue2' : '/child-app-vue2',
//         path: '/child/app-vue2',
//       },
//       {
//         index: '4-2',
//         title: '关于',
//         // path: `${isDev ? '/child/app-vue2' : '/child-app-vue2'}/about`,
//         path: '/child/app-vue2/about',
//       }
//     ],
//   },
//   {
//     index: '5',
//     title: 'app-vue3子应用',
//     iconComponent: Connection,
//     children: [
//       {
//         index: '5-1',
//         title: '首页',
//         // path: isDev ? '/child/app-vue3' : '/child-app-vue3',
//         path: '/child/app-vue3',
//       },
//       {
//         index: '5-2',
//         title: '关于',
//         // path: `${isDev ? '/child/app-vue3' : '/child-app-vue3'}/about`,
//         path: '/child/app-vue3/about',
//       },
//       {
//         index: '5-3',
//         title: '仪表盘',
//         // path: `${isDev? '/child/app-vue3' : '/child-app-vue3'}/dashboard`,
//         path: '/child/app-vue3/dashboard',
//       }
//     ],
//   }
// ]);

/**
 * 方案 2 跳转，若配置了 el-menu router=true 时，不会进入到 routerGo 方法
 * @param menu
 */
const handleMenuClick = (menu: MenuItem) => {
  // if (menu.path) {
  //   if (menu.target) {
  //     window.open(menu.path, menu.target);
  //   } else {
  //     console.log(menu.path, ' handleMenuClick ===>')
  //     // router.push(menu.path);
  //     // push(menu.path);
  //     routerGo(menu.path);
  //   }
  // }
  routerGo(menu.path, menu.title, menu.target);
};
</script>
