<template>
  <div class="stat">
    <h2 class="stat__title">Статистика собеседований</h2>
    <Doughnut class="stat__table" :data="chartData"></Doughnut>
  </div>
</template>

<script lang="ts" setup>
import {Chart as chartJS,Tooltip,Legend,ArcElement} from 'chart.js'
import {Doughnut} from 'vue-chartjs'

chartJS.register(
  Tooltip,Legend,ArcElement
)
 
 const chartData = {
  labels:[
    'Оффер',
    'Отказ',
    'В ожидании',
  ],
  datasets:[
    {
      label:'Собеседований',
      backgroundColor:["#d44950","#59a969",'#4f5a6e'],
      data:[10,20,5],
    },
  ]
 }
</script>

<style lang="scss" scoped>
@import '../assets/scss/blocks/PieChart';
</style>