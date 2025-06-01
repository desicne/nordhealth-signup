import * as yup from 'yup'

export const signupSchema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required'),
  subscribe: yup.boolean(),
})

export type SignupFormValues = yup.InferType<typeof signupSchema>
