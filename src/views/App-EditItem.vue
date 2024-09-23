<template>
    <div  v-if="interview?.id && !store.loading">
        <div class="add-item">
    <div class="add-item--inner">
      <h2 class="title add-item__title">Собеседование в компанию {{ interview?.company }}</h2>
      <div class="add-item__inputs inputs">
        <input
          type="text"
          placeholder="Компания"
          class="inputs__item inputs--company"
          v-model="interview.company" 
          id="company"
        />
        <input
          type="text"
          placeholder="Описание вакансии(ссылка)"
          class="inputs__item inputs--desc"
          v-model="interview.description" id="description"
        />
        <input
          type="text"
          placeholder="Контакт(имя)"
          class="inputs__item inputs--contact"
          v-model="interview.contactName" id="contactName"
        />
        <input
          type="text"
          placeholder="Telegram username HR"
          class="inputs__item inputs--contact-telegram"
          v-model="interview.telegram" id="telegram"
        />
        <input
          type="text"
          placeholder="Viber телефон HR"
          class="inputs__item inputs--contact-viber"
          v-model="interview.viber" id="viber"
        />
        <input
          type="text"
          placeholder="Телефон HR"
          class="inputs__item inputs--contact-phone"
          v-model="interview.phone" id="phone"
        />
      </div>
      <div class="inputs__more">
        <div class="inputs__more-fork">
            <input class="inputs__more-fork--from inputs-fork" v-model="interview.forkFrom" id="forkFrom" placeholder="Зарплатная вилка ОТ" type="number">
            <input class="inputs__more-fork--to inputs-fork" v-model="interview.forkTo" id="forkTo" placeholder="Зарплатная вилка ДО" type="number">
        </div>
        <div class="inputs__more-stages">
            <button class="inputs__more-stages-button" @click="addStage">
                <SvgIcon type="mdi" :path="mdiPlus" size="24"/> Добавить этап
            </button>
            <template v-if="interview.stages">
            <div v-for="(stage,index) in interview.stages" :key="index" class="inputs__more-stages-card stages-card">
                <label class="label" for="name-stage">Название этапа</label>
                <input type="text" id="nameStage" v-model="stage.name" class="inputs__more-stages-card-input input--name" title="Название этапа собеседования" placeholder="Название этапа">
                <label class="label" for="date-stage">Дата прохождения этапа</label>
                <input type="date" id="dateStage" v-model="stage.date" class="inputs__more-stages-card-input input--date" title="Дата прохождения собеседования">
                <label class="label" for="comm-stage">Комментарий</label>
                <textarea id="comm-stage" v-model="stage.comment" class="stages-card__comment" placeholder="Комментарий к этапу"></textarea>
                <button class="stages-card__delete-button" @click="deleteStage(index)">Удалить этап</button>
            </div>
          </template>
            <div class="inputs__more-stages-result">
              <div class="inputs__more-stages-result--reject">
                    <label for="reject">Отказ</label>
                    <input value="Reject" type="radio" v-model="interview.result" name="1" id="reject">
                </div>
                <div class="inputs__more-stages-result--offer">
                    <label for="offer">Оффер</label>
                    <input value="Offer" type="radio" v-model="interview.result" name="1" id="offer">
                </div>
            </div>
        </div>
      </div>
      <button class="add-item__save-btn"><SvgIcon :path="mdiContentSave" type="mdi"/> Сохранить</button>
    </div>
  </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from '@/stores/store'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlus,mdiContentSave } from '@mdi/js';
import type { IInterview } from '@/interfaces';
import {useRoute} from 'vue-router';
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const store = useStore()
const route =useRoute()
const db = getFirestore()

const interview=ref<IInterview>()

const docref=doc(db,`users/${store.userId}/interviews`,route.params.id as string)

const getData = async():Promise<void> =>{
  store.loading = true
  const docMeta= await getDoc(docref);
  interview.value = docMeta.data() as IInterview
  store.loading = false
}

const addStage = ()=>{
  if(interview.value) {
    if(!interview.value.stages) {
      interview.value.stages=[]
    }
    interview.value.stages.push({name:'',date:'',comment:''})
  }
}

const deleteStage=(index:number)=>{
  if(interview.value) {
    if(interview.value.stages) {
      interview.value.stages.splice(index,1)
    }
  }
}

onMounted(async ()=> await getData())

</script>

<style lang="scss" scoped>
@import '../assets/scss/blocks/editItem';


</style>