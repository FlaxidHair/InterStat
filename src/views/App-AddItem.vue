<template>
  <div class="add-item">
    <div class="add-item--inner">
      <h2 class="title add-item__title">Новое собеседование</h2>
      <div class="add-item__inputs inputs">
        <input
          type="text"
          placeholder="Компания"
          class="inputs__item inputs--company"
          v-model="company"
        />
        <input
          type="text"
          placeholder="Описание вакансии(ссылка)"
          class="inputs__item inputs--desc"
          v-model="description"
        />
        <input
          type="text"
          placeholder="Контакт(имя)"
          class="inputs__item inputs--contact"
          v-model="contactName"
        />
        <input
          type="text"
          placeholder="Telegram username HR"
          class="inputs__item inputs--contact-telegram"
          v-model="telegram"
        />
        <input
          type="text"
          placeholder="Viber телефон HR"
          class="inputs__item inputs--contact-viber"
          v-model="viber"
        />
        <input
          type="text"
          placeholder="Телефон HR"
          class="inputs__item inputs--contact-phone"
          v-model="phone"
        />

        <button
          @click="addNewInterview"
          :disabled="disableSaveButton || loading"
          class="inputs__button"
        >
          Создать собеседование
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IInterview } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import { useStore } from '@/stores/store'

const store = useStore()

const db = getFirestore()
const company = ref<string>('')
const description = ref<string>('')
const contactName = ref<string>('')
const telegram = ref<string>('')
const viber = ref<string>('')
const phone = ref<string>('')

const loading = ref<boolean>(false)

const addNewInterview = async (): Promise<void> => {
  loading.value = true
  const payload: IInterview = {
    id: uuidv4(),
    company: company.value,
    description: description.value,
    contactName: contactName.value,
    telegram: telegram.value,
    viber: viber.value,
    phone: phone.value,
    createdAt: new Date()
  }

  if (store.userId) {
    await setDoc(doc(db, `users/${store.userId}/interviews`, payload.id), payload)
      .then(() => {
        company.value = ''
        description.value = ''
        contactName.value = ''
        telegram.value = ''
        viber.value = ''
        phone.value = ''
      })
      .catch((error) => console.log(error.message))
  }

  loading.value = false
}

const disableSaveButton = computed<boolean>(() => {
  return !(company.value && description.value && contactName.value)
})
</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/addItem';
</style>
