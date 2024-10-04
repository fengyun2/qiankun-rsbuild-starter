<template>
  <el-dropdown @command="actionSelect">
    <el-tag :closable="index !== 0" :disable-transitions="false" @click="goto(itemData)" @close="tagClose(itemData, index)">{{ itemData.title }}</el-tag>
    <template #dropdown>
      <el-dropdown-item :disabled="disabledReload" :command="Eaction.reload">
        <el-icon><RefreshRight /></el-icon>
        <span>重新加载</span>
      </el-dropdown-item>
      <el-dropdown-item class="sperate-line" :disabled="disabledCurrent" :command="Eaction.current">
        <el-icon><Close /></el-icon>
        <span>关闭当前标签页</span>
      </el-dropdown-item>
      <el-dropdown-item :disabled="disabledLeft" :command="Eaction.left">
        <el-icon><Close /></el-icon>
        <span>关闭左侧标签页</span>
      </el-dropdown-item>
      <el-dropdown-item class="sperate-line" :disabled="disabledRight" :command="Eaction.right">
        <el-icon><Close /></el-icon>
        <span>关闭右侧标签页</span>
      </el-dropdown-item>
      <el-dropdown-item :command="Eaction.others">
        <el-icon><Close /></el-icon>
        <span>关闭其它标签页</span>
      </el-dropdown-item>
      <el-dropdown-item :command="Eaction.all">
        <el-icon><Close /></el-icon>
        <span>关闭全部标签页</span>
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTabBarStore } from '@/store';
import type { TagProps } from '@/store/modules/tab-bar/types';
import { DEFAULT_ROUTE } from '@/router/constants';
import { routerGo } from '@/utils/utils'

enum Eaction {
  reload = 'reload',
  current = 'current',
  left = 'left',
  right = 'right',
  others = 'others',
  all = 'all',
}

const props = defineProps({
  itemData: {
    type: Object as PropType<TagProps>,
    default() {
      return [];
    },
  },
  index: {
    type: Number,
    default: 0,
  },
});

// const router = useRouter();
const route = useRoute();
const tabBarStore = useTabBarStore();

const goto = (tag: TagProps) => {
  // router.push({ name: tag.name });
  routerGo(tag.path, tag.title)
};

const tagList = computed(() => {
  return tabBarStore.getTabList;
});

const disabledReload = computed(() => {
  return props.itemData.path !== route.fullPath;
});

const disabledCurrent = computed(() => {
  return props.index === 0;
});

const disabledLeft = computed(() => {
  return [0, 1].includes(props.index);
});

const disabledRight = computed(() => {
  return props.index === tagList.value.length - 1;
});

const tagClose = (tag: TagProps, idx: number) => {
  tabBarStore.deleteTag(idx, tag);
  if (props.itemData.path === route.fullPath) {
    const latest = tagList.value[idx - 1]; // 获取队列的前一个tab
    // router.push({ name: latest.name });
    routerGo(latest.path, latest.title)
  }
};

const findCurrentRouteIndex = () => {
  return tagList.value.findIndex((item) => item.path === route.fullPath);
};

const actionSelect = async (value: any) => {
  const { itemData, index } = props;
  const copyTagList = [...tagList.value];
  if (value === Eaction.current) {
    tagClose(itemData, index);
  } else if (value === Eaction.left) {
    const currentIndex = findCurrentRouteIndex();
    copyTagList.splice(1, props.index - 1);
    tabBarStore.freshTabList(copyTagList);
    if (currentIndex < index) {
      // router.push({ name: itemData.name });
      routerGo(itemData.path, itemData.title)
    }
  } else if (value === Eaction.right) {
    const currentIndex = findCurrentRouteIndex();
    copyTagList.splice(props.index + 1);
    tabBarStore.freshTabList(copyTagList);
    if (currentIndex > index) {
      // router.push({ name: itemData.name });
      routerGo(itemData.path, itemData.title)
    }
  } else if (value === Eaction.others) {
    const filterList = tagList.value.filter((el, idx) => {
      return idx === 0 || idx === props.index;
    });
    tabBarStore.freshTabList(filterList);
    // router.push({ name: itemData.name });
    routerGo(itemData.path, itemData.title)
  } else if (value === Eaction.reload) {
    tabBarStore.deleteCache(itemData);
    await routerGo(itemData.path, itemData.title)
    tabBarStore.addCache(itemData.path)
    // await router.push({name: itemData.name})
    // tabBarStore.addCache(itemData.name)
  } else {
    tabBarStore.resetTagList();
    // router.push({ name: DEFAULT_ROUTE_NAME });
    routerGo( DEFAULT_ROUTE.path, DEFAULT_ROUTE.title)
  }
};
</script>
<style scoped lang="scss">
  .tag-link {
    color: var(--color-text-2);
    text-decoration: none;
  }
  .link-activated {
    color: rgb(var(--link-6));
    .tag-link {
      color: rgb(var(--link-6));
    }
    & + .el-tag-close-btn {
      color: rgb(var(--link-6));
    }
  }
  ::v-deep(.el-dropdown-option-content) {
    span {
      margin-left: 10px;
    }
  }
  .el-dropdown-open {
    .tag-link {
      color: rgb(var(--danger-6));
    }
    .el-tag-close-btn {
      color: rgb(var(--danger-6));
    }
  }
  .sperate-line {
    border-bottom: 1px solid var(--color-neutral-3);
  }
</style>