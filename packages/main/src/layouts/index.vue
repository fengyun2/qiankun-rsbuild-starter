<template>
  <el-container style="height: 100vh;">
    <ISideBar />
    <el-container direction="vertical">
      <IHeader />
      <IMainContent />
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import ISideBar from './SideBar/index.vue'
import IHeader from './Header/index.vue'
import IMainContent from './MainContent/index.vue'

defineOptions({
  name: 'ILayout',
})
</script>