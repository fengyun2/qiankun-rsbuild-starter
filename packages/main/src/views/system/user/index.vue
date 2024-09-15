<template>
  <el-page-header @back="onBack" title="用户管理">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </template>

    <el-table :data="stars">
      <el-table-column
        v-for="(column, index) in columns"
        :key="column.prop || index"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :align="column.align"
      />
    </el-table>
  </el-page-header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { TableColumnCtx } from 'element-plus';
import { ElNotification as notify } from 'element-plus';

const onBack = () => {
  notify('Back');
};

interface Star {
  name: string;
  age: number;
  height: string;
  weight: string;
  birthday: string;
  birthplace: string;
  currentAddress: string;
  specialty: string;
}

type ColumnProps = Partial<TableColumnCtx<Star>>;

const columns = ref<ColumnProps[]>([
  {
    label: '姓名',
    prop: 'name',
    width: 150,
    align: 'center',
  },
  {
    label: '年龄',
    prop: 'age',
    width: 100,
    align: 'center',
  },
  {
    label: '身高',
    prop: 'height',
  },
  {
    label: '体重',
    prop: 'weight',
  },
  {
    label: '生日',
    prop: 'birthday',
  },
  {
    label: '出生地',
    prop: 'birthplace',
  },
  {
    label: '现住址',
    prop: 'currentAddress',
  },
  {
    label: '特长',
    prop: 'specialty',
  },
]);

const stars = ref<Star[]>([
  {
    name: '刘昊然',
    age: 24,
    height: '185cm',
    weight: '70kg',
    birthday: '1997-10-10',
    birthplace: '河南省平顶山市',
    currentAddress: '北京市',
    specialty: '表演',
  },
  {
    name: '周冬雨',
    age: 28,
    height: '162cm',
    weight: '45kg',
    birthday: '1992-01-03',
    birthplace: '河北省石家庄市',
    currentAddress: '北京市',
    specialty: '表演',
  },
  {
    name: '赵丽颖',
    age: 33,
    height: '165cm',
    weight: '48kg',
    birthday: '1987-10-16',
    birthplace: '河北省廊坊市',
    currentAddress: '上海市',
    specialty: '表演',
  },
  {
    name: '杨幂',
    age: 34,
    height: '167cm',
    weight: '45kg',
    birthday: '1986-09-12',
    birthplace: '北京市',
    currentAddress: '北京市',
    specialty: '表演',
  },
  {
    name: 'Angelababy',
    age: 32,
    height: '168cm',
    weight: '44kg',
    birthday: '1989-02-28',
    birthplace: '上海市',
    currentAddress: '上海市',
    specialty: '表演',
  },
  {
    name: '郑爽',
    age: 29,
    height: '168cm',
    weight: '45kg',
    birthday: '1991-08-22',
    birthplace: '辽宁省沈阳市',
    currentAddress: '北京市',
    specialty: '表演',
  },
  {
    name: '李小花',
    age: 22,
    height: '163cm',
    weight: '50kg',
    birthday: '2000-05-15',
    birthplace: '四川省成都市',
    currentAddress: '北京市',
    specialty: '表演',
  },
  {
    name: '王小美',
    age: 25,
    height: '166cm',
    weight: '52kg',
    birthday: '1996-07-30',
    birthplace: '浙江省杭州市',
    currentAddress: '上海市',
    specialty: '表演',
  },
  {
    name: '张小丽',
    age: 27,
    height: '169cm',
    weight: '47kg',
    birthday: '1994-02-11',
    birthplace: '广东省广州市',
    currentAddress: '北京市',
    specialty: '表演',
  },
]);
</script>
