<template>
  <div class="list">
    <h2 class="list__title title">Список собеседований</h2>
    <table class="table">
      <tr class="table__thead">
        <th class="table__title">Компания</th>
        <th class="table__title">Имя</th>
        <th class="table__title table__item--link">Вакансия</th>
        <th class="table__title">Контакты</th>
        <th class="table__title table__title--edit"></th>
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
        <td class="table__item table__item--func">
          <span class="hover-f">
            <SvgIcon class="table__item--edit" type="mdi" :path="mdiPencil" :size="24"></SvgIcon>
          </span>
          <span class="hover-f">
            <SvgIcon
              class="table__item--delete"
              type="mdi"
              :path="mdiTrashCanOutline"
              :size="24"
            ></SvgIcon>
          </span>
        </td>
      </tr>
    </table>
  </div>
  <WindowConfirm></WindowConfirm>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs
  // deleteDoc,
  // doc
} from 'firebase/firestore'
import { mdiTrashCanOutline, mdiPencil } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import { useStore } from '@/stores/store'
import type { IInterview } from '@/interfaces'
import WindowConfirm from '../components/AppWindowConfirm.vue'
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

// const removeInterview = async (id: string): Promise<void> => {
//   console.log('123')
// }
interface IMyEvent {
  type: string
  payload: void
}
const emit = defineEmits<{
  (e: 'IMyEvent', payload: any): any
}>()

const removeInterview = (): void => {
  console.log(123)
}

function handleClick() {
  emit('IMyEvent', removeInterview)
}
onMounted(async () => {
  const listInterviews: Array<IInterview> = await getAllInterviews()
  interviews.value = [...listInterviews]
})
</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/listItem';
</style>
