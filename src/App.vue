<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Component-Header.vue'
</script>

<template>
  <div class="container">
    <Header></Header>
    <nav class="navigation">
      <p class="navigation__list-item active">Все</p>
      <p class="navigation__list-item">Активные</p>
      <p class="navigation__list-item">Выполненные</p>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.navigation {
  display: flex;
  column-gap: 1em;
  margin-top: 10em;
}
.navigation__list-item {
  cursor: pointer;
  color: darkblue;
  text-decoration: none;
  text-transform: none;
  box-shadow: 0 0 0.1em 0.05em rgba(135, 206, 250, 0.5);
  padding: 0.5em;
  border-radius: 0.8em;
  font-size: 1.3vw;
  width: 10vw;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.active {
  border: 0.1em solid lightskyblue;
}
.navigation__list-item:hover {
  transition: 0.3s;
  background-color: lightskyblue;
  transform: translateY(-0.15em);
}
</style>
