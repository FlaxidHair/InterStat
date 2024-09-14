import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const userId = ref<string>('')
  const itemId = ref<string>('') 
  const modalActive = ref<boolean>(false)
  return { userId,itemId,modalActive}
})
