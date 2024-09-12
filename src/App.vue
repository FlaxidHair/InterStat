<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/AppHeader.vue'
</script>

<template>
  <div class="container">
    <Header></Header>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './assets/scss/variable';
@import './assets/scss/global';

.container {
  height: 100vh;
  background-color: $main-background-color;
}
</style>
