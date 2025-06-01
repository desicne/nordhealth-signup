import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSignup } from '~/composables/useSignup'

describe('useSignup', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('submits valid data', async () => {
    const { submit } = useSignup()
    const payload = {
      email: 'test@example.com',
      password: '123456',
      subscribe: true,
    }

    const result = await submit(payload)
    expect(result.success).toBe(true)
  })
})
