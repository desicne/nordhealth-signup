import { signupSchema } from '~/validation/signupSchema'
import { ValidationError } from 'yup'

describe('signupSchema', () => {
  it('fails with empty data', async () => {
    try {
      await signupSchema.validate({}, { abortEarly: false })
    } catch (err: unknown) {
      if (err instanceof ValidationError) {
        expect(err.errors).toContain('Email is required')
        expect(err.errors).toContain('Password is required')
      } else {
        throw err // rethrow unexpected errors
      }
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
