<script setup lang="ts">
import { useAuth } from '../../composables/useAuth'

const isDev = import.meta.env.DEV
const { isLoggedIn, loginAsMockUser, logout } = useAuth()
</script>

<template>
  <aside v-if="isDev" class="dev-panel" aria-label="開發用模擬登入控制">
    <p>開發用 · 模擬登入（非真實驗證）</p>
    <button v-if="!isLoggedIn" class="button" type="button" @click="loginAsMockUser">
      預覽已登入
    </button>
    <button v-else class="button button-secondary" type="button" @click="logout">
      預覽未登入
    </button>
  </aside>
</template>

<style scoped>
.dev-panel {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 30;
  display: grid;
  gap: 0.55rem;
  width: min(16rem, calc(100% - 2rem));
  padding: 0.75rem;
  border: 1px dashed var(--color-accent);
  background: var(--color-background);
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

.button {
  min-height: 2.25rem;
  font-size: 0.85rem;
}

.button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
</style>
