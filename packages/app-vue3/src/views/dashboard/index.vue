<template>
  <div class="container">
    <div class="left-side">
      <div class="panel">
        <Banner />
        <DataPanel />
        <ContentChart />
      </div>
      <el-row :gutter="16" style="margin-top: 16px">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <PopularContent />
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <CategoriesPercent />
        </el-col>
      </el-row>
    </div>
    <div class="right-side">
      <i-card class="card">
        <template #title>快捷入口</template>
        <template #extra>
          <el-link type="primary">查看更多</el-link>
        </template>
      </i-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue';
import DataPanel from './components/DataPanel.vue';
import ContentChart from './components/ContentChart.vue';
import PopularContent from './components/PopularContent.vue';
import CategoriesPercent from './components/CategoriesPercent.vue';

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

.card {
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}
</style>
