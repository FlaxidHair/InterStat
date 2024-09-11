<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navigation">
    <RouterLink to="/">
      <p class="navigation__list-item">Актуальные</p>
    </RouterLink>
    <RouterLink to="/">
      <p class="navigation__list-item">Выполненные</p>
    </RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
.navigation__list-item {
  color: red;
  text-decoration: none;
}
.navigation {
  display: flex;
  column-gap: 20px;
}
</style>
