<template>
  <div class="stat">
    <h2 class="stat__title">Статистика собеседований</h2>
    <Doughnut class="stat__table" :data="chartData()"></Doughnut>
  </div>
</template>

<script lang="ts" setup>
import { Chart as chartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore'
import { useStore } from '@/stores/store'
import type { IInterview } from '@/interfaces'

const store = useStore()
const db = getFirestore()
const interviews = ref<IInterview[]>([])


chartJS.register(
  Tooltip, Legend, ArcElement
)

const chartData = () => {
  const data: number[] = [0, 0, 0]
  interviews.value.forEach((el: IInterview) => {
    if (el.result === 'Оффер') {
      data[0]++
    } else if (el.result === 'Отказ') {
      data[1]++
    } else {
      data[2]++
    }
  })
  return {
    labels: [
      'Оффер',
      'Отказ',
      'В ожидании',
    ],
    datasets: [
      {
        label: 'Собеседований',
        backgroundColor: ["#d44950", "#59a969", '#4f5a6e'],
        data: data,
      },
    ]
  }
}

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
  store.loading = true

  const getData = query(
    collection(db, `users/${store.userId}/interviews`),
    orderBy('createdAt', 'desc'),)


  const listData = await getDocs(getData)
  setTimeout(() => {
    store.loading = false
  }, 300)
  return listData.docs.map((el) => {
    return el.data() as T
  })
}

onMounted(async () => {
  interviews.value = await getAllInterviews()
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/blocks/PieChart';
</style>