<template>
  <i-card class="general-card" :body-style="{ paddingTop: 0 }">
    <template #title>帮助文档</template>
    <template #extra>
      <el-link type="primary" :underline="false">查看更多</el-link>
    </template>
    <el-row>
      <el-col :span="12">
        <el-link class="link" :underline="false">产品概要</el-link>
      </el-col>
      <el-col :span="12">
        <el-link class="link" :underline="false">使用指南</el-link>
      </el-col>
      <el-col :span="12">
        <el-link class="link" :underline="false">接入流程</el-link>
      </el-col>
      <el-col :span="12">
        <el-link class="link" :underline="false">接口文档</el-link>
      </el-col>
    </el-row>
  </i-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.general-card {
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}
.link {
  margin: 10px 0;
  color: var(--el-text-color-regular);
  font-weight: normal;
}
</style>
