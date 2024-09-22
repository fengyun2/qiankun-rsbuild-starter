<template>
  <i-card class="general-card">
    <template #title>线上热门内容</template>
    <template #extra>
      <el-link type="primary">查看更多</el-link>
    </template>
    <el-space direction="vertical" :size="10" fill class="general-card-space">
      <el-radio-group
        v-model="type"
        size="small"
        @change="(value) => typeChange(value as string)"
      >
        <el-radio-button label="文本" value="text" />
        <el-radio-button label="图片" value="image" />
        <el-radio-button label="视频" value="video" />
      </el-radio-group>
      <el-table
        :data="renderList"
        :border="false"
        height="264"
        style="width: 100%"
        class="inner-table"
        v-loading="loading"
      >
        <el-table-column
          prop="key"
          label="排名"
          show-overflow-tooltip
          width="60"
        />
        <el-table-column prop="title" label="内容标题" show-overflow-tooltip />
        <el-table-column
          prop="clickNumber"
          label="点击量"
          show-overflow-tooltip
          min-width="100"
        />
        <el-table-column
          prop="increases"
          label="日涨幅"
          sortable
          show-overflow-tooltip
          min-width="100"
        >
          <template #default="scope">
            <div class="increases-cell">
              <span>{{ scope.row.increases }}%</span>
              <el-icon
                v-if="scope.row.increases !== 0"
                :size="8"
                class="increases-icon"
              >
                <CaretTop />
              </el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-space>
  </i-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { CaretTop } from '@element-plus/icons-vue';
import useLoading from '@/hooks/loading';
import { delay } from '@/utils/utils';
import { queryPopularList } from '../mock';

const type = ref('text');
const { loading, setLoading } = useLoading();
const renderList = ref<any[]>([]);

const fetchData = async (contentType: string) => {
  try {
    setLoading(true);
    await delay(500);
    const res = await queryPopularList({ type: contentType });
    renderList.value = res;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

const typeChange = (contentType: string) => {
  fetchData(contentType);
};

fetchData('text');
</script>
<style lang="scss" scoped>
.general-card {
  min-height: 395px;
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}

.general-card-space {
  display: flex;
}

.inner-table {
  ::v-deep(.el-table__header) {
    // font-size: 24px;
    .el-table__cell {
      color: var(--el-text-color-primary) !important;
      background-color: var(--el-fill-color) !important;
      font-weight: 500 !important;
    }
  }
  ::v-deep(.el-table__inner-wrapper::before) {
    height: 0;
  }
}

.increases-cell {
  display: flex;
  align-items: center;
  span {
    margin-right: 4px;
  }
  .increases-icon {
    color: var(--el-color-error);
  }
}
</style>
