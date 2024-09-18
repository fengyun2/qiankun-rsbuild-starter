<template>
  <div class="container">
    <div class="box">
      <div class="statistic-card">
        <el-statistic :value="outputValueOfTotalOnlineUsers">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              线上总用户数
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>较昨日新增</span>
            <span class="green">
              3%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="statistic-card">
        <el-statistic :value="outputValueOfDayActiveUsers">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              日活跃用户
              <el-tooltip
                effect="dark"
                content="一天内登录产品的用户数量"
                placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>较昨日新增</span>
            <span class="green">
              24%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="statistic-card">
        <el-statistic :value="outputValueOfMonthActiveUsers">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              月活跃用户
              <el-tooltip
                effect="dark"
                content="一月内登录产品的用户数量"
                placement="top"
              >
                <el-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </el-icon>
              </el-tooltip>
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>环比</span>
            <span class="red">
              12%
              <el-icon>
                <CaretBottom />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="statistic-card">
        <el-statistic :value="outputValueOfTodayNewTransactions">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              今天的新交易
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>较昨天</span>
            <span class="green">
              16%
              <el-icon>
                <CaretTop />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useTransition } from '@vueuse/core';
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue';

const totalOnlineUsers = ref(0);
const dayActiveUsers = ref(0);
const monthActiveUsers = ref(0);
const todayNewTransactions = ref(0);
const outputValueOfTotalOnlineUsers = useTransition(totalOnlineUsers, {
  duration: 0,
})

const outputValueOfDayActiveUsers = useTransition(dayActiveUsers, {
  duration: 0,
});

const outputValueOfMonthActiveUsers = useTransition(monthActiveUsers, {
  duration: 0,
});

const outputValueOfTodayNewTransactions = useTransition(
  todayNewTransactions,
  {
    duration: 0,
  }
);

totalOnlineUsers.value = 99988880;
dayActiveUsers.value = 120000;
monthActiveUsers.value = 300000;
todayNewTransactions.value = 72000;
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  // background-color: var(--el-fill-color) !important;
}

.box {
  flex: 1 1 0%;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>
