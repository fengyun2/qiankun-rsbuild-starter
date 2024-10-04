import { defineStore } from 'pinia'
import type { AppState } from './types'
import { menuList } from './mock'

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    menuList: []
  }),
  getters: {
    getMenuList(): AppState['menuList'] {
      return this.menuList
    }
  },
  actions: {
    setMenuList(menuList: AppState['menuList']) {
      this.menuList = menuList
    },
    fetchMenuList() {
      this.menuList = menuList
    }
  }
})

export default useAppStore