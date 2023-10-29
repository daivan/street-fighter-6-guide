import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import characters from '@/data/characters.json'

export const useCharacterStore = defineStore('characterStore', {
  
  state: () =>  {
      return {
        characters: characters,
        count: 0
      }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
});


export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  
})