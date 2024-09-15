<template>
  <el-container>
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
