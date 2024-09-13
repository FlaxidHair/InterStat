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

      <tr class="table__row">
        <td class="table__item">Белтаможсервис</td>
        <td class="table__item">Андрей</td>
        <td class="table__item table__item--link">
          <a class="" href="#"
            >https://you.com/search?q=%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0+%D0%B8%D0%B7+4+%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BE%D0%BA+%D0%B2+html&fromSearchBar=true&tbm=youchat&cid=c0_313dbb91-f694-49d6-8f4c-1ca337052cfb</a
          >
        </td>
        <td class="table__item table__item--contacts">
          <span class="item__contact">
            <a href="#"><img src="../assets/images/telegram.svg" alt="telegram ссылка" /></a
          ></span>
          <span class="item__contact"
            ><a href="#"><img src="../assets/images/viber.svg" alt="viber ссылка" /></a>
          </span>
          <span class="item__contact">
            <a href="tel:#"><img src="../assets/images/phone.svg" alt="Phone" /></a>
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
