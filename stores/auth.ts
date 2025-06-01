import { defineStore } from 'pinia'
import type { SignupPayload } from '~/types/User'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | SignupPayload,
  }),
  actions: {
    login(user: SignupPayload) {
      this.user = user
    },
    logout() {
      this.user = null
    },
  },
})
