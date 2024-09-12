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
        <span v-if="store.userId" class="navigation__list-item" @click="store.userId = ''"
          >Выход <SvgIcon type="mdi" :size="28" :path="mdiLogout"></SvgIcon
        ></span>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'
const store = useStore()
import { RouterLink } from 'vue-router'
import { mdiAccount, mdiLogout, mdiPlus, mdiListBoxOutline, mdiChartBoxOutline } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
import type { ComputedRef } from 'vue'
import { ref, computed } from 'vue'

interface IMenuItem {
  label: string
  icon: string
  path: string
  show: ComputedRef<boolean>
}

const items = ref<IMenuItem[]>([
  {
    label: 'Авторизация',
    icon: mdiAccount,
    path: '/Auth',
    show: computed((): boolean => !store.userId)
  },
  {
    label: 'Добавить',
    icon: mdiPlus,
    path: '/AddItem',
    show: computed((): boolean => !!store.userId)
  },
  {
    label: 'Список собеседований',
    icon: mdiListBoxOutline,
    path: '/ListItem',
    show: computed((): boolean => !!store.userId)
  },
  {
    label: 'Авторизация',
    icon: mdiChartBoxOutline,
    path: '/Stat',
    show: computed((): boolean => !!store.userId)
  }
])
</script>

<style scoped lang="scss">
@import '../assets/scss/global', '../assets/scss/variable', '../assets/scss/blocks/header';
</style>
