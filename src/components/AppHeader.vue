<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation__list">
        <RouterLink to="/">
          <li class="navigation__list-item">Авторизация</li>
        </RouterLink>
        <RouterLink to="/">
          <li class="navigation__list-item">Добавить</li>
        </RouterLink>
        <RouterLink to="/">
          <li class="navigation__list-item">Список собеседований</li>
        </RouterLink>
        <RouterLink to="/">
          <li class="navigation__list-item">Статистика</li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.header {
  background-color: #303b44;
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
      font-size: 1.6em;
      color: white;
      transition: 0.3s;
      border-radius: 0.4em;
      padding: 3px;
    }
    &-item:hover {
      box-shadow: 0 0 0.06em 0.1em;
      transform: translateY(-2px);
    }
  }
}
</style>
