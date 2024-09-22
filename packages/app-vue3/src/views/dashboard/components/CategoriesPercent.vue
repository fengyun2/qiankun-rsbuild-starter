<template>
  <i-card class="general-card">
    <template #title>内容类型占比</template>
    <Chart height="310px" :option="chartOption" v-loading="loading" />
  </i-card>
</template>
<script setup lang="ts">
import useLoading from '@/hooks/loading';
import useChartOption from '@/hooks/chart-option';

const { loading } = useLoading();
const { chartOption } = useChartOption((isDark) => {
  return {
    legend: {
      left: 'center',
      data: ['纯文本', '图文类', '视频类'],
      bottom: 0,
      icon: 'circle',
      itemWidth: 8,
      textStyle: {
        color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
      },
      itemStyle: {
        borderWidth: 0,
      },
    },
    tooltip: {
      show: true,
      trigger: 'item',
    },
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: '40%',
          style: {
            text: '内容量',
            textAlign: 'center',
            fill: isDark ? '#ffffffb3' : '#4E5969',
            fontSize: 14,
          },
        },
        {
          type: 'text',
          left: 'center',
          top: '50%',
          style: {
            text: '928,531',
            textAlign: 'center',
            fill: isDark ? '#ffffffb3' : '#4E5969',
            fontSize: 14,
            fontWeight: 500,
          },
        },
      ],
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '50%'],
        label: {
          formatter: '{d}%',
          fontSize: 14,
          color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
        },
        itemStyle: {
          borderColor: isDark ? '#232324' : '#fff',
          borderWidth: 1,
        },
        data: [
          {
            value: [148564],
            name: '纯文本',
            itemStyle: {
              color: isDark ? '#3D72F6' : '#249EFF',
            },
          },
          {
            value: [334271],
            name: '图文类',
            itemStyle: {
              color: isDark ? '#A079DC' : '#313CA9',
            },
          },
          {
            value: [445694],
            name: '视频类',
            itemStyle: {
              color: isDark ? '#6CAAF5' : '#21CCFF',
            },
          },
        ],
      },
    ],
  };
});
</script>
<style lang="scss" scoped>
.general-card {
  min-height: 395px;
  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0;
  }
}
</style>
