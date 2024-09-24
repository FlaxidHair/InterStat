<template>
  <div class="stat">
    <Doughnut class="stat" :data="chartData" ></Doughnut>
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
  ],
  datasets:[
    {
      label:['Data One',"Data Two"],
      backgroundColor:["red","green"],
      fill:false,
      data:[10,20],
      
    },
  ]
 }
</script>

<style lang="scss" scoped>

.stat {
  width:50vw;
  height:50vh;
}
</style>