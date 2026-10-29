<script setup lang="ts">
import { onUnmounted, watch } from 'vue'
import { useAuth } from '../../composables/useAuth'

const { user, isAccountOpen, closeAccount } = useAuth()

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeAccount()
  }
}

watch(isAccountOpen, (open) => {
  if (open) {
    document.addEventListener('keydown', onKeydown)
    return
  }

  document.removeEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isAccountOpen && user"
      class="modal-overlay"
      @click.self="closeAccount"
    >
      <div
        class="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-title"
      >
        <div class="modal-header">
          <h2 id="account-title">帳號資訊</h2>
          <button class="icon-button" type="button" aria-label="關閉帳號資訊" @click="closeAccount">
            關閉
          </button>
        </div>
        <p class="placeholder-note">{{ user.label }}，不是真實身分驗證結果。</p>
        <dl class="account-list">
          <div>
            <dt>名稱</dt>
            <dd>{{ user.name }}</dd>
          </div>
          <div>
            <dt>電子郵件</dt>
            <dd>{{ user.email }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.62);
}

.modal-dialog {
  width: min(26rem, 100%);
  padding: 1.25rem 1.25rem 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-background-soft);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.modal-header h2 {
  font-size: 1.4rem;
}

.icon-button {
  padding: 0.35rem 0.7rem;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-heading);
}

.icon-button:hover {
  border-color: var(--color-border-hover);
}

.icon-button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.account-list {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.account-list dt {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.account-list dd {
  color: var(--color-heading);
}
</style>
