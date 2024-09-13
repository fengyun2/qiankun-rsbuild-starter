<template>
  <div class="content">
    <h1>app-vue3 子应用</h1>
  </div>
  <router-link to="/home">首页</router-link>
  &nbsp;
  <router-link to="/about">关于</router-link>

  <router-view />
</template>

<style scoped>
.content {
  /* display: flex;
  min-height: 100vh;
  line-height: 1.1; */
  text-align: center;
  /* flex-direction: column;
  justify-content: center; */
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
