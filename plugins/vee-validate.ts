import { defineRule } from 'vee-validate'

export default defineNuxtPlugin(() => {
  defineRule('required', value => {
    if (!value || !value.toString().trim().length) return 'This field is required'
    return true
  })

  defineRule('email', value => {
    if (!value || !value.toString().trim().length) return true
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    return emailPattern.test(value) ? true : 'Please enter a valid email'
  })
})