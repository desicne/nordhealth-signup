<template>
  <div class="success-wrapper">
    <provet-card padding="xl" class="success-card">
      <provet-stack align="center" gap="l">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--n-color-status-success)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon-check-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <h2 class="success-title">You're signed up!</h2>
        <p class="success-message">
          Thanks for joining! We'll keep you posted with occasional updates.
        </p>
        <provet-button variant="primary" @click="goHome"> Back to Sign Up </provet-button>
      </provet-stack>
    </provet-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => router.push('/')
</script>

<style scoped>
.success-wrapper {
  display: flex;
  justify-content: center;
  background: var(--n-color-background-primary);
  padding: var(--n-space-xl);
}

.success-card {
  max-width: 420px;
  width: 100%;
  text-align: center;
}

.success-title {
  font-size: 1.5rem;
  margin: 0;
}

.success-message {
  font-size: 1rem;
  color: var(--n-color-text-secondary);
  margin: 0;
}

.icon-check-circle {
  margin: 0 auto;
  display: block;
}
</style>
