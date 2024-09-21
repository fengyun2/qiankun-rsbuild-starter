<template>
  <el-card v-bind="cardProps" :class="cardClass">
    <template #header>
      <slot name="header">
        <slot name="title" />
        <slot name="extra" />
      </slot>
    </template>
    <template #default>
      <slot name="default" />
    </template>
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </el-card>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { CardProps } from 'element-plus';

export interface ICardProps extends CardProps {
  size?: 'small' | 'medium';
}

const { size = 'medium', ...cardProps } = defineProps<ICardProps>();
const cardClass = computed(() => {
  return {
    'i-card': true,
    'i-card-size-small': size === 'small',
    'i-card-size-medium': size === 'medium',
  };
});

defineOptions({
  name: 'ICard',
});
</script>
<style lang="scss" scoped>
.i-card {
  ::v-deep(.el-card__header) {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
  }
}
.i-card-size-medium {
  ::v-deep(.el-card__header) {
    height: 46px;
    padding: 10px 16px;
  }
}
</style>
