<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <div v-for="item in items" :key="item.path">
          <RouterLink :to="item.path">
            <li v-if="item.show" class="navigation__list-item">
              {{ item.label }} <SvgIcon type="mdi" :size="28" :path="item.icon"></SvgIcon>
            </li>
          </RouterLink>
        </div>
        <span v-if="store.userId" class="navigation__list-item" @click="signOutMethod"
          >Выход <SvgIcon type="mdi" :size="28" :path="mdiLogout"></SvgIcon
        ></span>
      </ul>
    </nav>
    <div v-if="store.loading" class="loader"></div>
  </header>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
const store = useStore()
import { RouterLink } from 'vue-router'
import {
  mdiAccountOutline,
  mdiLogout,
  mdiPlus,
  mdiListBoxOutline,
  mdiChartBoxOutline
} from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import type { ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import router from '../router/index'
interface IMenuItem {
  label: string
  icon: string
  path: string
  show: ComputedRef<boolean>
}

const items = ref<IMenuItem[]>([
  {
    label: 'Авторизация',
    icon: mdiAccountOutline,
    path: '/Auth',
    show: computed((): boolean => !store.userId)
  },
  {
    label: 'Добавить',
    icon: mdiPlus,
    path: '/',
    show: computed((): boolean => !!store.userId)
  },
  {
    label: 'Список собеседований',
    icon: mdiListBoxOutline,
    path: '/ListItem',
    show: computed((): boolean => !!store.userId)
  },
  {
    label: 'Статистика',
    icon: mdiChartBoxOutline,
    path: '/Stat',
    show: computed((): boolean => !!store.userId)
  }
])

const signOutMethod = async (): Promise<void> => {
  await signOut(getAuth())
  router.push('/Auth')
}
</script>

<style scoped lang="scss">

@import '../assets/scss/blocks/header','../assets/scss/blocks/loader';
</style>
