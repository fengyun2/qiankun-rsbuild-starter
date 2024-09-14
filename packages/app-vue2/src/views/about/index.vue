<template>
  <div class="about">
    <h4>app-vue2 关于我</h4>
    <button @click="toAppVue3">跳转app-vue3首页</button>
  </div>
</template>
<script>
function push(subapp: string) {
  history.pushState(null, subapp, subapp);
}
function toAppVue3() {
  push('/app/app-vue3')
}
export default {
  methods: {
    toAppVue3
  }
}

</script>