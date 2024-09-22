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
      <el-row class="right-content">
        <el-col :span="24">
          <div class="panel moduler-wrap">
            <QuickOperation />
            <RecentlyVisited />
          </div>
        </el-col>
        <el-col :span="24" class="panel">
          <Carousel />
        </el-col>
        <el-col :span="24" class="panel">
          <Announcement />
        </el-col>
        <el-col :span="24" class="panel">
          <Docs />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from './components/Banner.vue';
import DataPanel from './components/DataPanel.vue';
import ContentChart from './components/ContentChart.vue';
import PopularContent from './components/PopularContent.vue';
import CategoriesPercent from './components/CategoriesPercent.vue';
import QuickOperation from './components/QuickOperation.vue';
import RecentlyVisited from './components/RecentlyVisited.vue';
import Carousel from './components/Carousel.vue';
import Announcement from './components/Announcement.vue';
import Docs from './components/Docs.vue';

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

.right-content {
  gap: 16px;
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

.moduler-wrap {
  border-radius: 4px;
  background-color: var(--el-fill-color);
  ::v-deep(.text) {
    font-size: 12px;
    text-align: center;
    color: var(--el-text-color);
    margin-top: 0;
    margin-bottom: 1em;
  }
  ::v-deep(.wrapper) {
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;

    &:last-child {
      .text {
        margin-bottom: 0;
      }
    }
    &:hover {
      .icon {
        color: var(--el-color-primary);
        background-color: #e8f3ff;
      }
      .text {
        color: var(--el-color-primary);
      }
    }
  }
  ::v-deep(.icon) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    color: var(--el-text-color);
    font-size: 16px;
    background-color: var(--el-fill-color);
    border-radius: 4px;
  }
}
</style>
