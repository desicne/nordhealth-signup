<template>
  <provet-card padding="l">
    <h1 slot="header">Sign Up</h1>
    <Form :validation-schema="schema" @submit="onSubmit">
      <provet-stack gap="m">
        <Field name="email" v-slot="{ field, errorMessage }">
          <provet-input
            v-bind="field"
            id="email"
            label="Email"
            type="email"
            name="email"
            expand
          />
          <small v-if="errorMessage" class="error-text">{{ errorMessage }}</small>
        </Field>

        <Field name="password" v-slot="{ field, errorMessage }">
          <provet-input
            v-bind="field"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            name="password"
            expand
          >
            <provet-button slot="end" type="button" square @click="toggle">
              <provet-icon :name="showPassword ? 'interface-edit-off' : 'interface-edit-on'" />
            </provet-button>
          </provet-input>
          <small v-if="errorMessage" class="error-text">{{ errorMessage }}</small>
        </Field>

        <provet-checkbox
          label="Send me updates"
          :checked="values.subscribe"
          @change="values.subscribe = $event.target.checked"
        />

        <provet-button type="submit" variant="primary" expand :disabled="submitting">
          {{ submitting ? 'Signing up…' : 'Sign Up' }}
        </provet-button>
      </provet-stack>
    </Form>
  </provet-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form, Field, useForm } from 'vee-validate'
import { signupSchema, type SignupFormValues } from '~/validation/signupSchema'
import { useSignup } from '~/composables/useSignup'
import type { SignupPayload } from '~/types/User'

const showPassword = ref(false)
const toggle = () => (showPassword.value = !showPassword.value)

const schema = signupSchema
const { values } = useForm<SignupFormValues>()

const { submit, submitting } = useSignup()
const router = useRouter()

const onSubmit = async (values: SignupFormValues) => {
  const result = await submit(values as SignupPayload)
  if (result.success) {
    router.push('/success')
  }
}
</script>

<style scoped>
.error-text {
  color: var(--n-color-text-danger);
  font-size: 0.875rem;
}
</style>
