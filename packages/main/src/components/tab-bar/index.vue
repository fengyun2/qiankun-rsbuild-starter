<template>
  <div class="tab-bar-container">
    <el-affix ref="affixRef" :offset="offsetTop">
      <div class="tab-bar-box">
        <div class="tab-bar-scroll">
          <div class="tags-wrap">
            <tab-item
              v-for="(tag, index) in tagList"
              :key="tag.path"
              :index="index"
              :item-data="tag"
            />
          </div>
        </div>
        <div class="tag-bar-operation"></div>
      </div>
    </el-affix>
  </div>
</template>
<script lang="ts" setup>
  import { ref, reactive, computed, watch, onUnmounted } from 'vue';
  // import type { RouteLocationNormalized } from 'vue-router';
  import {
    listenerRouteChange,
    removeRouteListener,
  } from '@/utils/route-listener.ts';
  import { useTabBarStore } from '@/store';
  import { MenuItem } from '@/store/modules/app/types'
  import tabItem from './tab-item.vue';

  // const appStore = useAppStore();
  const appStore = reactive({
    navbar: true,
  })
  const tabBarStore = useTabBarStore();

  const affixRef = ref();
  const tagList = computed(() => {
    return tabBarStore.getTabList;
  });
  const offsetTop = computed(() => {
    return appStore.navbar ? 60 : 0;
  });

  watch(
    () => appStore.navbar,
    () => {
      affixRef.value.update();
    }
  );
  listenerRouteChange((menu: MenuItem) => {
    if (
      !tagList.value.some((tag) => tag.path === menu.path)
    ) {
      tabBarStore.updateTabList(menu);
    }
  }, true);

  onUnmounted(() => {
    removeRouteListener();
  });
</script>

<style scoped lang="scss">
  .tab-bar-container {
    position: relative;
    background-color: var(--el-color-white);
    padding-top: 60px;
    .tab-bar-box {
      display: flex;
      padding: 0 0 0 20px;
      background-color: var(--el-color-white);
      border-bottom: 1px solid var(--el-border-color);
      .tab-bar-scroll {
        height: 32px;
        flex: 1;
        overflow: hidden;
        .tags-wrap {
          padding: 4px 0;
          height: 48px;
          white-space: nowrap;
          overflow-x: auto;

          :deep(.arco-tag) {
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
            cursor: pointer;
            &:first-child {
              .arco-tag-close-btn {
                display: none;
              }
            }
          }
        }
      }
    }

    .tag-bar-operation {
      width: 100px;
      height: 32px;
    }
  }
</style>
