<template>
  <div class="list">
    <h2 class="list__title title">Список собеседований</h2>
    <table v-show="!store.loading"  class="table">
      <tr class="table__thead">
        <th class="table__title">Компания</th>
        <th class="table__title">Имя</th>
        <th class="table__title table__item--link">Вакансия</th>
        <th class="table__title">Контакты</th>
        <th class="table__title table__title--stages">Пройденные этапы</th>
        <th class="table__title table__title--fork">Зарплатная вилка</th>
        <th class="table__title table__title--result">Результат</th>
        <th class="table__title table__title--edit"></th>
      </tr>
      <tr v-for="item in interviews" :key="item.id" class="table__row">
        <td class="table__item">{{ item.company }}</td>
        <td class="table__item">{{ item.contactName }}</td>
        <td class="table__item table__item--link">
          <a class="table__item--link-text" :href="item.description">Ссылка на вакансию...</a>
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
        <td class="table__item table__item--stages">
          <span class="table__item--stages-list" style="width:20%;" v-for="(stage,index) in item.stages" :key="index"> 
              <span class="item-stage--index" :data-stage="stage.name">{{ index+1 }}</span>     
          </span>
        </td>
        <td class="table__item table__item--fork">{{ item.forkFrom }} - {{ item.forkTo }}</td>
        <td class="table__item table__item--result"><span class="text-result" :class="showResult(item.result)">{{ item.result }}</span></td>
        <td class="table__item table__item--func">
          <span class="hover-f" @click="getIdEdit(item.id)">
            <SvgIcon class="table__item--edit" type="mdi" :path="mdiPencil" :size="24"></SvgIcon>
          </span>
          <span class="hover-f" @click="getIdDelete(item.id)">
            <SvgIcon
              class="table__item--delete"
              type="mdi"
              :path="mdiTrashCanOutline"
              :size="24"
            ></SvgIcon>
          </span>
        </td>
      </tr>
      <div v-show="!interviews.length" class="table__empty-status"><p class="table__empty-status--message">{{ emptyStatus }}</p>
<RouterLink class="table__empty-status--link" to="/">Добавить?</RouterLink>
      </div>
    </table>

    </div>
    <Transition>
      <WindowConfirm :onButtonClick="removeInterview"></WindowConfirm>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore'
import { mdiTrashCanOutline, mdiPencil} from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import { useStore } from '@/stores/store'
import type { IInterview } from '@/interfaces'
import WindowConfirm from '../components/AppWindowConfirm.vue'
import router from '@/router'

const store = useStore()
const db = getFirestore()

const interviews = ref<IInterview[]>([])
const emptyStatus = ref<string>('Список собеседований, пока что пуст.')

function getIdDelete (id:string):void {
  store.modalActive = '1'
  store.itemId = id
}

function getIdEdit (id:string):void {
  store.itemId = id
  router.push(`/EditItem/${id}`)
}

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
  store.loading = true 
  const getData = query(
    collection(db, `users/${store.userId}/interviews`),
    orderBy('createdAt', 'desc')
  )

  const listData = await getDocs(getData)
  setTimeout(()=>{
    store.loading = false
  },300)

  return listData.docs.map((el) => {
    return el.data() as T
  })
}

const removeInterview = async (id: string): Promise<void> => {
  store.loading = true
  await deleteDoc(doc(db,`users/${store.userId}/interviews`,id))
.finally(()=>{
  store.loading = false})
  const listInterviews:Array<IInterview> = await getAllInterviews()
  interviews.value = [...listInterviews]
  store.modalActive=''
};

const showResult = (result:string)=>{
  if(result==='Отказ') {
    return 'text-result-reject'
  }else {
    return 'text-result-offer'
  }
}

onMounted(async () => {
  const listInterviews: Array<IInterview> = await getAllInterviews()
  interviews.value = [...listInterviews]
})
</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/listItem';
</style>
