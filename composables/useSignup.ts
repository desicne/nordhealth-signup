import type { SignupPayload } from '~/types/User'
import { useAuthStore } from '~/stores/auth'
import { ref } from 'vue'

export function useSignup() {
  const submitting = ref(false)
  const store = useAuthStore()

  async function submit(payload: SignupPayload) {
    submitting.value = true
    await new Promise((r) => setTimeout(r, 1500))
    submitting.value = false
    store.login(payload)
    return { success: true }
  }

  return { submit, submitting }
}
