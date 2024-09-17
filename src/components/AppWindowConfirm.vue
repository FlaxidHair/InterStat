<template>
  <div v-if="store.modalActive=='1'" class="dialog__wrapper" @click="closeModalWindow">
    <div class="dialog__card">
      <h2 class="dialog__card-title">Удаление интервью</h2>
      <div class="dialog__card-alert">
        <SvgIcon :path="mdiAlertCircleOutline" type="mdi" size="30"></SvgIcon>
        <p class="dialog__card-alert--message">Вы уверены?</p>
      </div>
      <div class="dialog__card-actions">
        <button class="dialog__card-actions--confirm actions-btn" @click="callParentFunction(store.itemId)">Да</button>
        <button class="dialog__card-actions--reject actions-btn">Нет</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useStore } from '@/stores/store';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAlertCircleOutline } from '@mdi/js';
const store=useStore()

const props = defineProps<{
  onButtonClick: (id:string) => Promise<void>;
}>();

const callParentFunction =  (id:string) => {
   props.onButtonClick(id)
};

const closeModalWindow = ($event:any) =>{
  if($event.target.classList.contains('dialog__wrapper')|| $event.target.classList.contains('dialog__card-actions--reject')){
    store.modalActive = ''
  }
}

</script>

<style scoped lang="scss">
@import '../assets/scss/blocks/windowConfirm';
</style>
