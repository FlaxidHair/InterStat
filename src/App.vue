<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/AppHeader.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useStore } from './stores/store'

const store = useStore()

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      store.userId = user.uid
    } else {
      store.userId = ''
    }
  })
})
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
}
</style>
