<template>
  <i-card class="general-card" :body-style="{ padding: '15px 20px 13px 20px' }">
    <template #title>公告</template>
    <template #extra>
      <el-link type="primary">查看更多</el-link>
    </template>
    <div>
      <div v-for="(item, idx) in list" :key="idx" class="item">
        <el-tag :type="item.type" size="small">{{ item.label }}</el-tag>
        <span class="item-content">{{ item.content }}</span>
      </div>
    </div>
  </i-card>
</template>
<script setup lang="ts">
import type { TagProps } from 'element-plus';
type Item = {
  type: TagProps['type'];
  label: string;
  content: string;
};
const list: Item[] = [
  {
    type: 'danger',
    label: '活动',
    content: '内容最新优惠活动',
  },
  {
    type: 'success',
    label: '消息',
    content: '新增内容尚未通过审核，详情请点击查看。',
  },
  {
    type: 'primary',
    label: '通知',
    content: '当前产品试用期即将结束，如需续费请点击查看。',
  },
  {
    type: 'primary',
    label: '通知',
    content: '1月新系统升级计划通知',
  },
  {
    type: 'success',
    label: '消息',
    content: '新增内容已经通过审核，详情请点击查看。',
  },
];
</script>
<style lang="scss" scoped>
.general-card {
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}

.item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-bottom: 4px;
  .item-content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 4px;
    color: var(--el-text-color-regular);
    text-decoration: none;
    font-size: 13px;
    cursor: pointer;
  }
}
</style>
