<template>
  <h4>app-vue3首页</h4>
  <button @click="toAppVue2">跳转app-vue2 关于我页面</button>
</template>
<script setup lang="ts">
function push(subapp: string) {
  console.log(subapp, '点击跳转 ===>')
  history.pushState(null, subapp, subapp);
}
function toAppVue2() {
  push('/child/app-vue2/about')
}
</script>