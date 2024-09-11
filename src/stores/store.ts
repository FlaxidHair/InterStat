import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      message: '' as string
    }
  },
  getters: {},
  actions: {}
})
