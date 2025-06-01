import { signupSchema } from '~/validation/signupSchema'

describe('signupSchema', () => {
  it('fails with empty data', async () => {
    try {
      await signupSchema.validate({}, { abortEarly: false })
    } catch (err: any) {
      expect(err.errors).toContain('Email is required')
      expect(err.errors).toContain('Password is required')
    }
  })

  it('passes with valid data', async () => {
    const valid = {
      email: 'user@example.com',
      password: 'abc123',
      subscribe: false,
    }
    await expect(signupSchema.validate(valid)).resolves.toBeDefined()
  })
})
