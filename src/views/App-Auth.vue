<template>
  <div class="auth">
    <div class="auth--inner">
      <div class="auth__text">
        <h2 class="auth__text-title">Добро пожаловать!</h2>
        <span class="auth__text-subtitle"
          >{{ subtitleText }}
          <span @click="isLogin = !isLogin" class="auth__text-subtitle--link">{{
            subtitleLink
          }}</span></span
        >
      </div>
      <form @click.prevent="1" class="form">
        <label for="email" class="form__label label-email">Email</label>
        <input
          type="email"
          placeholder="Введите Email"
          id="email"
          v-model="email"
          class="form__input input-email"
        />
        <label for="password" class="form__label label-password">Пароль</label>
        <div class="form__password">
          <input
            :type="isPass"
            placeholder="Введите пароль"
            id="password"
            v-model="password"
            class="form__input input-password"
          />
          <button @mousedown="openEye" @mouseup="closeEye" class="password-show--btn">
            <SvgIcon type="mdi" :size="20" :path="iconPath"></SvgIcon>
          </button>
        </div>

        <button class="form__button">
          <SvgIcon type="mdi" :path="mdiAccount"></SvgIcon>
          {{ logText }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { mdiAccount, mdiEye, mdiEyeClosed } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
const isLogin = ref<boolean>(true)
const subtitleText = computed<string>(() => {
  return isLogin.value ? 'Аккаунта еще нет?' : 'Уже есть аккаунт?'
})
const subtitleLink = computed<string>(() => {
  return isLogin.value ? 'Создайте сейчас' : 'Войдите в него'
})
const logText = computed<string>(() => {
  return isLogin.value ? 'Войти' : 'Регистрация'
})

const isEyeOpen = ref<boolean>(false)
const iconPath = computed<string>(() => {
  return isEyeOpen.value ? mdiEye : mdiEyeClosed
})
function openEye(): void {
  isEyeOpen.value = true
}
function closeEye(): void {
  isEyeOpen.value = false
}
const email = ref<string>('')
const password = ref<string | number>('')

const isPass = computed<string>(() => {
  return isEyeOpen.value ? 'text' : 'password'
})
</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/auth';
</style>
