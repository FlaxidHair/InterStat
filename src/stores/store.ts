import { defineStore } from 'pinia'
import { ref } from 'vue'
// export const useStore = defineStore('store', {
//   state: () => {
//     return {}
//   },
//   getters: {},
//   actions: {}
// })

export const useStore = defineStore('store', () => {
  const userId = ref<string>('123')

  return { userId }
})
