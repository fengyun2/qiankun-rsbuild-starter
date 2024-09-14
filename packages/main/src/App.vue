<template>
  <div class="content">
    <h1>Main主应用入口</h1>
  </div>
  <router-link to="/app/app-vue2">vue-app2</router-link>
  &nbsp;
  <router-link to="/app/app-vue3">vue-app3</router-link>
  <!-- 侧边栏 -->
  <!-- <ul class="mainapp-sidemenu">
    <li @click="push('/app/app-vue2')">app-vue2</li>
    <li @click="push('/app/app-vue3')">app-vue3</li>
  </ul> -->
  <router-view />
</template>

<script setup lang="ts">
// function push(subapp: string) {
//   console.log(subapp, '点击跳转 ===>')
//   history.pushState(null, subapp, subapp);
// }
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
