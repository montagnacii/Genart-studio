<script setup lang="ts">
import { nextTick, onUnmounted, ref, watch } from 'vue'
import { useAuth } from '../../composables/useAuth'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const { isLoginOpen, closeLogin, loginForDemo } = useAuth()

const dialogRef = ref<HTMLElement | null>(null)
const emailInput = ref<HTMLInputElement | null>(null)
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const emailError = ref('')
const passwordError = ref('')
const formError = ref('')
const isSubmitting = ref(false)
const previouslyFocused = ref<HTMLElement | null>(null)

function resetForm() {
  email.value = ''
  password.value = ''
  showPassword.value = false
  emailError.value = ''
  passwordError.value = ''
  formError.value = ''
  isSubmitting.value = false
}

function validate(): boolean {
  emailError.value = ''
  passwordError.value = ''
  formError.value = ''

  const trimmedEmail = email.value.trim()

  if (!trimmedEmail) {
    emailError.value = '請輸入電子郵件。'
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    emailError.value = '請輸入有效的電子郵件格式。'
  }

  if (!password.value) {
    passwordError.value = '請輸入密碼。'
  } else if (password.value.length < 8) {
    passwordError.value = '密碼至少需要 8 個字元。'
  }

  return !emailError.value && !passwordError.value
}

async function onSubmit() {
  if (isSubmitting.value || !validate()) {
    return
  }

  isSubmitting.value = true

  try {
    await loginForDemo()
    resetForm()
  } catch {
    formError.value = '模擬登入暫時無法完成，請再試一次。'
  } finally {
    isSubmitting.value = false
  }
}

function requestClose() {
  if (isSubmitting.value) {
    return
  }

  closeLogin()
}

function onKeydown(event: KeyboardEvent) {
  if (!isLoginOpen.value) {
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    requestClose()
    return
  }

  if (event.key !== 'Tab' || !dialogRef.value) {
    return
  }

  const focusable = dialogRef.value.querySelectorAll<HTMLElement>(
    'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
  )

  const first = focusable.item(0)
  const last = focusable.item(focusable.length - 1)

  if (!first || !last) {
    return
  }

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(isLoginOpen, async (open) => {
  if (open) {
    previouslyFocused.value = document.activeElement instanceof HTMLElement ? document.activeElement : null
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
    await nextTick()
    emailInput.value?.focus()
    return
  }

  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
  previouslyFocused.value?.focus()
  resetForm()
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isLoginOpen"
      class="modal-overlay"
      @click.self="requestClose"
    >
      <div
        ref="dialogRef"
        class="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        aria-describedby="login-note"
      >
        <div class="modal-header">
          <h2 id="login-title">登入</h2>
          <button
            class="icon-button"
            type="button"
            :disabled="isSubmitting"
            aria-label="關閉登入視窗"
            @click="requestClose"
          >
            關閉
          </button>
        </div>

        <p id="login-note" class="placeholder-note">
          此為前端展示用模擬登入，不會驗證真實帳號，也不會儲存密碼。
        </p>

        <form class="login-form" @submit.prevent="onSubmit">
          <label class="field">
            <span>電子郵件</span>
            <input
              ref="emailInput"
              v-model="email"
              type="email"
              name="email"
              autocomplete="username"
              :disabled="isSubmitting"
              :aria-invalid="Boolean(emailError)"
              :aria-describedby="emailError ? 'email-error' : undefined"
            >
            <span v-if="emailError" id="email-error" class="field-error">{{ emailError }}</span>
          </label>

          <label class="field">
            <span>密碼</span>
            <span class="password-row">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                autocomplete="current-password"
                :disabled="isSubmitting"
                :aria-invalid="Boolean(passwordError)"
                :aria-describedby="passwordError ? 'password-error' : undefined"
              >
              <button
                class="button button-secondary password-toggle"
                type="button"
                :disabled="isSubmitting"
                :aria-pressed="showPassword"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '隱藏' : '顯示' }}
              </button>
            </span>
            <span v-if="passwordError" id="password-error" class="field-error">{{ passwordError }}</span>
          </label>

          <p v-if="formError" class="field-error" role="alert">{{ formError }}</p>

          <button class="button" type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? '模擬登入中…' : '登入' }}
          </button>
        </form>
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
  width: min(28rem, 100%);
  max-height: min(90vh, 40rem);
  overflow: auto;
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

.icon-button:hover:not(:disabled) {
  border-color: var(--color-border-hover);
}

.icon-button:focus-visible,
.password-toggle:focus-visible,
.button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.login-form {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.field {
  display: grid;
  gap: 0.4rem;
  color: var(--color-heading);
}

.field input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-heading);
}

.password-row {
  display: flex;
  gap: 0.5rem;
}

.password-toggle {
  flex: 0 0 auto;
  min-height: 2.75rem;
}

.field-error {
  color: #e8b4b4;
  font-size: 0.85rem;
}

button:disabled,
input:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}
</style>
