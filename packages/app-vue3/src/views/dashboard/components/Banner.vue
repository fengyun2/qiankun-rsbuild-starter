<template>
  <el-col class="banner">
    <el-col :span="8">
      <el-text tag="h5" style="margin-top: 0" class="welcome">欢迎回来，风是云的翅膀</el-text>
    </el-col>
    <el-divider class="panel-border" />
  </el-col>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 20px 20px 0 20px;
  background-color: var(--color-bg-2);
  border-radius: 4px 4px 0 0;

  .welcome {
    color: var(--el-text-color-primary);
    font-size: var(--el-font-size-extra-large);
  }
}
</style>
