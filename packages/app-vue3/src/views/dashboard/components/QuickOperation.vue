<template>
  <i-card class="general-card" :body-style="{ padding: '24px 20px 0 20px' }">
    <template #title>快捷操作</template>
    <template #extra>
      <el-link type="primary">管理</el-link>
    </template>
    <el-row :gutter="8">
      <el-col v-for="link in links" :key="link.text" :span="8" class="wrapper">
        <div class="icon">
          <el-icon>
            <component :is="link.icon" />
          </el-icon>
        </div>
        <el-text class="text" tag="div">{{ link.text }}</el-text>
      </el-col>
    </el-row>
  </i-card>
</template>
<script setup lang="ts">
type Link = {
  text: string;
  icon: string;
};
const links: Link[] = [
  {
    text: '内容管理',
    icon: 'Document',
  },
  {
    text: '内容分析',
    icon: 'Coin',
  },
  {
    text: '高级管理',
    icon: 'Setting',
  },
  {
    text: '线上推广',
    icon: 'Iphone',
  },
  {
    text: '内容投放',
    icon: 'TrendCharts',
  },
];
</script>
<style scoped lang="scss">
.general-card {
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}
</style>
