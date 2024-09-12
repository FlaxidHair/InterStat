<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <RouterLink to="/">
          <li class="navigation__list-item">
            <SvgIcon type="mdi" :size="28" :path="mdiAccount"></SvgIcon>
            Авторизация
          </li>
        </RouterLink>
        <RouterLink to="/AddItem">
          <li class="navigation__list-item">
            <SvgIcon type="mdi" :size="28" :path="mdiPlus"></SvgIcon>
            Добавить
          </li>
        </RouterLink>
        <RouterLink to="/ListItem">
          <li class="navigation__list-item">
            <SvgIcon type="mdi" :size="28" :path="mdiListBoxOutline"></SvgIcon>
            Список собеседований
          </li>
        </RouterLink>
        <RouterLink to="/Stat">
          <li class="navigation__list-item">
            <SvgIcon type="mdi" :size="28" :path="mdiChartBoxOutline"></SvgIcon>
            Статистика
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { mdiAccount, mdiPlus, mdiListBoxOutline, mdiChartBoxOutline } from '@mdi/js'
import SvgIcon from '@jamescoyle/vue-icon'
</script>

<style scoped lang="scss">
@import '../assets/scss/global', '../assets/scss/variable';
.header {
  background-color: $main-color;
  padding: 15px 0;
}
.navigation {
  &__list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 100%;
    column-gap: 1.5em;
    margin-top: 0.3em;

    &-item {
      font-size: $font-size-main;
      color: $main-white;
      transition: 0.3s;
      border-radius: $border-radius-main;
      padding: 5px;
      display: flex;
      align-items: center;
      column-gap: 5px;
    }

    &-item:hover {
      box-shadow: 0 0 0.06em 0.1em;
      transform: translateY(-2px);
    }

    &-item:active {
      transform: scale(1.1);
    }
  }
}
</style>
