<template>
  <div class="dialog__wrapper">
    <div class="dialog__card">
      <h2 class="dialog__card-title">Вы уверены?</h2>
      <div class="dialog__card-actions">
        <button class="dialog__card-actions--confirm" @click="handleEvent">Да</button>
        <button class="dialog__card-actions--reject">Нет</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  onMyEvent?: (payload: any) => void
}>()

function handleEvent(payload: any) {
  console.log(payload)

  onMyEvent?.(payload)
}
</script>

<style scoped lang="scss"></style>
