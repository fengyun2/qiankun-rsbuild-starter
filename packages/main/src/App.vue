<template>
  <el-config-provider :locale="zhCn">
    <ILayout />
    <!-- <div class="content">
      <h1>Main主应用入口</h1>
    </div>
    <router-link to="/app/app-vue2">vue-app2</router-link>
    &nbsp;
    <router-link to="/app/app-vue3">vue-app3</router-link>
    <router-view /> -->
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import ILayout from './layouts/index.vue'
</script>

<style scoped>
.content {
  /* display: flex;
  min-height: 100vh;
  line-height: 1.1; */
  text-align: center;
  /* flex-direction: column; */
  /* justify-content: center; */
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.mainapp-sidemenu {
  display: inline-flex;
  gap: 5px;
  list-style-type: none;
}
.mainapp-sidemenu li {
  display: inline-block;
}
</style>
