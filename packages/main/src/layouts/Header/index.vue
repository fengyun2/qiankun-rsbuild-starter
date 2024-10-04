<template>
  <el-header class="layout-header fixed">
    <div class="toolbar">
      <el-dropdown @command="changeLang">
        <span class="el-dropdown-link">
          {{ langLabel }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item command="zh-CN">中文</el-dropdown-item>
            <el-dropdown-item command="en-US">English</el-dropdown-item> -->
            <el-dropdown-item
              v-for="[langKey, langValue] in Object.entries(langs)"
              :key="langKey"
              :command="langKey"
              >{{ langValue }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown @command="changeSetting">
        <el-icon><User /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">个人设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { User, ArrowDown } from '@element-plus/icons-vue';

defineOptions({
  name: 'IHeader',
});

const langs: Record<string, string> = {
  'zh-CN': '中文',
  'en-US': 'English',
};

const lang = ref('zh-CN');
const langLabel = computed(() => langs[lang.value]);

const changeLang = (command: string) => {
  lang.value = command;
};

const changeSetting = (command: string) => {
  if (command === 'profile') {
    // 跳转到个人设置页面
  } else if (command === 'logout') {
    // 退出登录
  }
};
</script>

<style lang="scss" scoped>
.layout-header {
  text-align: right;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  background-color: var(--el-color-white);
  border: 1px solid var(--el-border-color);
  &.fixed {
    position: fixed;
    top: 0;
    left: 200px;
    width: calc(100% - 200px);
    z-index: 100;
  }
}
.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
