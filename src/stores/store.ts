import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const userId = ref<string>('')
  const itemId = ref<string>('') 
  return { userId,itemId}
})
