<template>
  <el-container class="container">
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
defineOptions({
  name: 'IMainContent',
});
</script>
<style lang="scss" scoped>
.container {
  background-color: var(--el-fill-color) !important;
}
</style>