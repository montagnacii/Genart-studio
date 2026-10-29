<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import { useAuth } from '../../composables/useAuth'

const { user, openAccount, logout } = useAuth()
const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

function closeMenu() {
  isOpen.value = false
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function onAccountInfo() {
  closeMenu()
  openAccount()
}

function onLogout() {
  closeMenu()
  logout()
}

function onDocumentClick(event: MouseEvent) {
  if (!rootRef.value?.contains(event.target as Node)) {
    closeMenu()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

document.addEventListener('click', onDocumentClick)
document.addEventListener('keydown', onKeydown)

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div v-if="user" ref="rootRef" class="account-menu">
    <button
      class="account-button"
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      aria-controls="account-menu"
      @click="toggleMenu"
    >
      <span class="avatar" aria-hidden="true">{{ user.initials }}</span>
      <span class="account-name">{{ user.name }}</span>
    </button>
    <div
      v-if="isOpen"
      id="account-menu"
      class="account-dropdown"
      role="menu"
    >
      <p class="dropdown-note">{{ user.label }}</p>
      <button type="button" role="menuitem" @click="onAccountInfo">帳號資訊</button>
      <button type="button" role="menuitem" @click="onLogout">登出</button>
    </div>
  </div>
</template>

<style scoped>
.account-menu {
  position: relative;
}

.account-button {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 2.4rem;
  padding: 0.2rem 0.55rem 0.2rem 0.25rem;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-heading);
}

.account-button:hover,
.account-button:focus-visible {
  border-color: var(--color-border-hover);
}

.account-button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.avatar {
  display: inline-flex;
  width: 1.9rem;
  height: 1.9rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-accent);
  color: #161616;
  font-size: 0.85rem;
}

.account-name {
  max-width: 8.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.9rem;
}

.account-dropdown {
  position: absolute;
  top: calc(100% + 0.4rem);
  right: 0;
  z-index: 20;
  min-width: 11rem;
  padding: 0.45rem;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
}

.dropdown-note {
  padding: 0.35rem 0.55rem 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.account-dropdown button {
  display: block;
  width: 100%;
  padding: 0.5rem 0.55rem;
  border: 0;
  background: transparent;
  color: var(--color-heading);
  text-align: left;
}

.account-dropdown button:hover,
.account-dropdown button:focus-visible {
  background: rgba(196, 146, 74, 0.12);
}

.account-dropdown button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 0;
}
</style>
