import type { SignupPayload } from '~/types/User'

export async function fakeSignupService(payload: SignupPayload): Promise<{ success: boolean }> {
  // here I'd put a real API request
  console.log('Fake signup:', payload)
  return await new Promise((res) => setTimeout(() => res({ success: true }), 1500))
}
