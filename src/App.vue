<script setup lang="ts">
import { RouterView } from 'vue-router'
import AccountInfoModal from './components/auth/AccountInfoModal.vue'
import AuthDevPanel from './components/auth/AuthDevPanel.vue'
import LoginModal from './components/auth/LoginModal.vue'
import AppFooter from './components/layout/AppFooter.vue'
import AppNavbar from './components/layout/AppNavbar.vue'
</script>

<template>
  <div class="app-shell">
    <AppNavbar />
    <main class="app-main">
      <RouterView />
    </main>
    <AppFooter />
    <LoginModal />
    <AccountInfoModal />
    <AuthDevPanel />
  </div>
</template>
