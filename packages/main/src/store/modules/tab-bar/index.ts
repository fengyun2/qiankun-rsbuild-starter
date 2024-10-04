// import type { RouteLocationNormalized } from 'vue-router'
import { defineStore } from 'pinia'
import { DEFAULT_ROUTE, DEFAULT_ROUTE_PATH, REDIRECT_ROUTE_PATH } from '@/router/constants'
import { isString } from '@/utils/is'
import { TagProps, TabBarState } from './types'
import type { MenuItem } from '../app/types'

// const formatTag = (router: RouteLocationNormalized): TagProps => {
//   const { meta, fullPath, name, query } = router
//   const { title, ignoreCache } = meta
//   return {
//     title: title as string,
//     name: name as string,
//     fullPath,
//     query,
//     ignoreCache: ignoreCache as boolean
//   }
// }

function formatTag(menuItem: MenuItem): TagProps {
  const { title, path, } = menuItem
  return {
    title: title as string,
    path: path as string
  }
}

const BAN_LIST = [REDIRECT_ROUTE_PATH];

const useAppStore = defineStore('tabBar', {
  state: (): TabBarState => ({
    cacheTabList: new Set([DEFAULT_ROUTE_PATH]),
    tagList: [DEFAULT_ROUTE]
  }),
  getters: {
    getTabList(): TagProps[] {
      return this.tagList;
    },
    getCacheList(): string[] {
      return Array.from(this.cacheTabList)
    }
  },
  actions: {
    updateTabList(menuItem: MenuItem) {
      if (BAN_LIST.includes(menuItem.path as string)) {
        return
      }
      // this.tagList.push(formatTag(route))
      // if (!route?.meta?.ignoreCache) {
      //   this.cacheTabList.add(route.name as string)
      // }
      this.tagList.push(formatTag(menuItem))
      this.cacheTabList.add(menuItem.path as string)
    },
    deleteTag(idx: number, tag: TagProps) {
      this.tagList.splice(idx, 1)
      this.cacheTabList.delete(tag.path)
    },
    addCache(path: string) {
      if (isString(path) && path !== '') {
        this.cacheTabList.add(path)
      }
    },
    deleteCache(tag: TagProps) {
      this.cacheTabList.delete(tag.path)
    },
    freshTabList(tags: TagProps[]) {
      this.tagList = tags
      this.cacheTabList.clear();
      // 先判断ignoreCache
      this.tagList
        .filter((tag) => !tag.ignoreCache)
        .map(tag => tag.path)
        .forEach(path => {
          this.cacheTabList.add(path)
        })
    },
    resetTagList() {
      this.tagList = [DEFAULT_ROUTE]
      this.cacheTabList.clear()
      this.cacheTabList.add(DEFAULT_ROUTE_PATH)
    }
  }
})

export default useAppStore;