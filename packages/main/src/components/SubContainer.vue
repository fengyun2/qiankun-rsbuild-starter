<template>
  <div id="sub-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { start } from 'qiankun';
import { registerApps } from '@/utils/qiankun';

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    registerApps();
    start({
      sandbox: {
        experimentalStyleIsolation: true, // 样式隔离
      },
    });
  }
});
</script>
