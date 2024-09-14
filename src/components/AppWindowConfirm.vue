<template>
  <div class="dialog__wrapper">
    <div class="dialog__card">
      <h2 class="dialog__card-title">Вы уверены?</h2>
      <div class="dialog__card-actions">
        <button class="dialog__card-actions--confirm" @click="callParentFunction(store.itemId)">Да</button>
        <button class="dialog__card-actions--reject">Нет</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from '@/stores/store';

const store=useStore()

const props = defineProps<{
  onButtonClick: (id:string) => Promise<void>; // Ожидаем функцию, возвращающую Promise
}>();

const callParentFunction =  (id:string) => {
   props.onButtonClick(id)
};


</script>

<style scoped lang="scss"></style>
