import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      message: '' as string
    }
  },
  getters: {},
  actions: {
    async getTasks(url: string): Promise<any> {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
  }
})
