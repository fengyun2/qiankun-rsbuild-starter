<template>
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <Banner />
        <DataPanel />
        <ContentChart />
      </div>
    </div>
    <div class="right-side">
      <el-card class="card">
        <template #header>
          <div class="card-header">
            <el-text class="mx-1" size="large">快捷入口</el-text>
            <el-link type="primary">查看更多</el-link>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue';
import DataPanel from './components/DataPanel.vue';
import ContentChart from './components/ContentChart.vue'

defineOptions({
  name: 'Dashboard',
});
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--el-fill-color);
  // padding: 16px 20px;
  padding-bottom: 0;
  display: flex;
}

.left-side {
  flex: 1;
  overflow: auto;
}

.right-side {
  width: 280px;
  margin-left: 16px;
}

.panel {
  background-color: #fff;
  border-radius: 4px;
  overflow: auto;
}
::v-deep(.panel-border) {
  margin-bottom: 0;
  border-top: 1px solid rgb(242, 243, 245);
}

// .right {
//   width: 280px;
//   ::v-deep {
//     .el-space__item {
//       width: 100%;
//     }
//   }
//   .card-header {
//     display: flex;
//     justify-content: space-between;
//     // align-items: center;
//   }
// }
</style>
