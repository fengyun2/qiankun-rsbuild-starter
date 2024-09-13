<template>
  <div class="content">
    <h1>Main主应用入口</h1>
  </div>
  <router-link to="/app/app-vue2">vue-app2</router-link>
  &nbsp;
  <router-link to="/app/app-vue3">vue-app3</router-link>

  <router-view />
</template>

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

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
