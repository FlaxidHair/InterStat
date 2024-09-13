<template>
  <div class="list">
    <h2 class="list__title title">Список собеседований</h2>
    <!-- <div class="table">
      <div class="table__titles">
        <h4 class="title table__titles-title--company">Компания</h4>
        <h4 class="title title-table table__titles-title--name">Имя HR</h4>
        <h4 class="title title-table table__titles-title--vacansy">Вакансия</h4>
        <h4 class="title title-table table__titles-title--contacts">Контакты</h4>
      </div>
      <div class="table__items">
        <span class="table__item--company">12313</span>
        <span class="table__item--name table__item">1</span>
        <span class="table__item--vacansy table__item">1</span>
        <span class="table__item--contacts table__item">1</span>
      </div>
    </div> -->
    <table class="table">
      <tr class="table__thead">
        <th class="table__title">Компания</th>
        <th class="table__title">Имя</th>
        <th class="table__title table__item--link">Вакансия</th>
        <th class="table__title">Контакты</th>
      </tr>
      <div></div>
      <tr v-for="item in interviews" :key="item.id" class="table__row">
        <td class="table__item">{{ item.company }}</td>
        <td class="table__item">{{ item.contactName }}</td>
        <td class="table__item table__item--link">
          <a class="" href="#">{{ item.description }}</a>
        </td>
        <td class="table__item table__item--contacts">
          <span class="item__contact">
            <a :href="'https://t.me/' + item.telegram" v-if="item?.telegram"
              ><img src="../assets/images/telegram.svg" alt="telegram ссылка" /></a
          ></span>
          <span class="item__contact" v-if="item?.viber"
            ><a :href="'viber://chat?number=%2B' + item.viber"
              ><img src="../assets/images/viber.svg" alt="viber ссылка"
            /></a>
          </span>
          <span class="item__contact" v-if="item?.phone">
            <a :href="'tel:' + item.phone"><img src="../assets/images/phone.svg" alt="Phone" /></a>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs
  // deleteDoc,
  // doc
} from 'firebase/firestore'
import { useStore } from '@/stores/store'
import type { IInterview } from '@/interfaces'
const store = useStore()
const db = getFirestore()

const interviews = ref<IInterview[]>([])

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
  const getData = query(
    collection(db, `users/${store.userId}/interviews`),
    orderBy('createdAt', 'desc')
  )
  const listData = await getDocs(getData)

  return listData.docs.map((el) => {
    return el.data() as T
  })
}

onMounted(async () => {
  const listInterviews: Array<IInterview> = await getAllInterviews()
  interviews.value = [...listInterviews]
})
</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/listItem';
</style>
