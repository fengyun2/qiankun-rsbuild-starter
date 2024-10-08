import type { RouteRecordRaw } from 'vue-router'
import SubContainer from '@/components/SubContainer.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/system/user',
        name: 'user',
        meta: { title: '用户管理' },
        component: () => import('../views/system/user/index.vue')
      },
      {
        // history模式需要通配所有路由，详见vue-router文档
        path: '/child/app-vue3/:pathMatch(.*)*',
        name: 'app-vue3',
        meta: {},
        // component: () => import('@/components/SubContainer.vue')
        component: SubContainer
      },
      {
        path: '/child/app-vue2/:pathMatch(.*)*',
        name: 'app-vue2',
        meta: {},
        // component: () => import('@/components/SubContainer.vue')
        component: SubContainer
      }
    ]
  }
]

export default routes
