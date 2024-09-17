<template>
  <el-aside width="200px">
    <el-scrollbar>
      <el-menu :default-openeds="defaultOpeneds" :router="false">
        <template v-for="menu in menus" :key="menu.index">
          <el-sub-menu
            v-if="menu.items && menu.items.length"
            :index="menu.index"
          >
            <template #title>
              <el-icon><component :is="menu.iconComponent" /></el-icon>
              {{ menu.title }}
            </template>
            <template v-for="item in menu.items" :key="item.index">
              <el-menu-item v-if="!item.items" :index="item.path" @click="handleMenuClick(item)">
                {{ item.label }}
              </el-menu-item>
              <el-sub-menu v-else :index="item.index">
                <template #title>
                  {{ item.label }}
                </template>
                <el-menu-item
                  v-for="subItem in item.items"
                  :key="subItem.index"
                  :index="subItem.path"
                  @click="handleMenuClick(subItem)"
                >
                  {{ subItem.label }}
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
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { Menu, Setting, Message, Link, Connection } from '@element-plus/icons-vue';
import { routerGo } from '@/utils/utils';

interface TopLevelMenuItem {
  index: string;
  title: string;
  iconComponent: any;
  items?: SubMenuItem[];
  path?: string;
  target?: string;
}

interface SubMenuItem {
  index: string;
  label: string;
  items?: SubMenuItem[];
  path?: string;
  target?: string;
}

defineOptions({
  name: 'ISideBar',
});

// const router = useRouter();

const defaultOpeneds = ref<string[]>(['1', '3']);

// const isDev = process.env.NODE_ENV === 'development';
// window.__POWERED_BY_QIANKUN__

// function push(subapp: string) { history.pushState(null, subapp, subapp) }

const menus = ref<TopLevelMenuItem[]>([
  {
    index: '1',
    title: '系统管理',
    iconComponent: Setting,
    items: [
      {
        index: '1-1',
        label: '用户管理',
        path: '/system/user',
      },
      {
        index: '1-2',
        label: '权限设置',
        items: [
          {
            index: '1-2-1',
            label: '角色管理',
            path: '/system/permissions/roles',
          },
          {
            index: '1-2-2',
            label: '权限列表',
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
    items: [
      {
        index: '2-1',
        label: '通知列表',
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
    items: [
      {
        index: '4-1',
        label: '首页',
        // path: isDev ? '/child/app-vue2' : '/child-app-vue2',
        path: '/child/app-vue2',
      },
      {
        index: '4-2',
        label: '关于',
        // path: `${isDev ? '/child/app-vue2' : '/child-app-vue2'}/about`,
        path: '/child/app-vue2/about',
      }
    ],
  },
  {
    index: '5',
    title: 'app-vue3子应用',
    iconComponent: Connection,
    items: [
      {
        index: '5-1',
        label: '首页',
        // path: isDev ? '/child/app-vue3' : '/child-app-vue3',
        path: '/child/app-vue3',
      },
      {
        index: '5-2',
        label: '关于',
        // path: `${isDev ? '/child/app-vue3' : '/child-app-vue3'}/about`,
        path: '/child/app-vue3/about',
      }
    ],
  }
]);

const handleMenuClick = (menu: TopLevelMenuItem | SubMenuItem) => {
  if (menu.path) {
    if (menu.target) {
      window.open(menu.path, menu.target);
    } else {
      console.log(menu.path, ' handleMenuClick ===>')
      // router.push(menu.path);
      // push(menu.path);
      routerGo(menu.path);
    }
  }
};
</script>
