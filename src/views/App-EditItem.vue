<template>
    <div>
        <div class="add-item">
    <div class="add-item--inner">
      <h2 class="title add-item__title">Собеседование в компанию {{ nameStage }}</h2>
      <div class="add-item__inputs inputs">
        <input
          type="text"
          placeholder="Компания"
          class="inputs__item inputs--company"
          v-model="company" id="company"
        />
        <input
          type="text"
          placeholder="Описание вакансии(ссылка)"
          class="inputs__item inputs--desc"
          v-model="description" id="description"
        />
        <input
          type="text"
          placeholder="Контакт(имя)"
          class="inputs__item inputs--contact"
          v-model="contactName" id="contactName"
        />
        <input
          type="text"
          placeholder="Telegram username HR"
          class="inputs__item inputs--contact-telegram"
          v-model="telegram" id="telegram"
        />
        <input
          type="text"
          placeholder="Viber телефон HR"
          class="inputs__item inputs--contact-viber"
          v-model="viber" id="viber"
        />
        <input
          type="text"
          placeholder="Телефон HR"
          class="inputs__item inputs--contact-phone"
          v-model="phone" id="phone"
        />
      </div>
      <div class="inputs__more">
        <div class="inputs__more-fork">
            <input class="inputs__more-fork--from inputs-fork" v-model="forkFrom" id="forkFrom" placeholder="Зарплатная вилка ОТ" type="number">
            <input class="inputs__more-fork--to inputs-fork" v-model="forkTo" id="forkTo" placeholder="Зарплатная вилка ДО" type="number">
        </div>
        <div class="inputs__more-stages">
            <button class="inputs__more-stages-button">
                <SvgIcon type="mdi" :path="mdiPlus" size="24"/> Добавить этапnumber
            </button>
            <div class="inputs__more-stages-card stages-card">
                <label class="label" for="name-stage">Название этапа</label>
                <input type="text" id="nameStage" v-model="nameStage" class="inputs__more-stages-card-input input--name" title="Название этапа собеседования" placeholder="Название этапа">
                <label class="label" for="date-stage">Дата прохождения этапа</label>
                <input type="date" id="dateStage" v-model="dateStage" class="inputs__more-stages-card-input input--date" title="Дата прохождения собеседования">
                <label class="label" for="comm-stage">Комментарий</label>
                <textarea id="comm-stage" v-model="commentStage"  class="stages-card__comment" placeholder="Комментарий к этапу"></textarea>
                <button class="stages-card__delete-button">Удалить этап</button>
            </div>
            <div class="inputs__more-stages-result">
              <div class="inputs__more-stages-result--reject">
                    <label for="reject">Отказ</label>
                    <input type="radio" name="1" id="reject">
                </div>
                <div class="inputs__more-stages-result--offer">
                    <label for="offer">Оффер</label>
                    <input type="radio" name="1" id="offer">
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
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlus,mdiContentSave } from '@mdi/js';
const store = useStore()

const company = ref<string>('')
const description = ref<string>('')
const contactName = ref<string>('')
const telegram = ref<string>('')
const viber = ref<string>('')
const phone = ref<string>('')

const forkFrom = ref<string>('')
const forkTo = ref<string>('')
const nameStage = ref<string>('')
const dateStage = ref<string>('')
const commentStage = ref<string>('')

</script>

<style lang="scss" scoped>
@import '../assets/scss/blocks/editItem';


</style>