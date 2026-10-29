<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '../../composables/useAuth'
import AccountMenu from '../auth/AccountMenu.vue'

const route = useRoute()
const { isLoggedIn, openLogin } = useAuth()
const isMenuOpen = ref(false)
const isHome = computed(() => route.name === 'home')

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navbar" :class="{ overlay: isHome }">
    <div class="navbar-inner">
      <RouterLink class="brand" to="/" @click="closeMenu">Genart Studio</RouterLink>

      <nav id="site-menu" class="nav-links" :class="{ open: isMenuOpen }">
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/gallery" @click="closeMenu">Gallery</RouterLink>
        <RouterLink
          to="/#contact"
          active-class=""
          exact-active-class=""
          @click="closeMenu"
        >
          Contact
        </RouterLink>
      </nav>

      <div class="navbar-actions">
        <AccountMenu v-if="isLoggedIn" />
        <button
          v-else
          class="button nav-login"
          type="button"
          @click="openLogin"
        >
          登入
        </button>
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="site-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          {{ isMenuOpen ? '關閉選單' : '選單' }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-border);
  background: rgba(18, 18, 18, 0.92);
  backdrop-filter: blur(8px);
}

.navbar.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-bottom-color: transparent;
  background: transparent;
  backdrop-filter: none;
}

.navbar-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: min(var(--content-width), calc(100% - 2rem));
  margin: 0 auto;
  padding: 0.9rem 0;
}

.brand {
  color: var(--color-heading);
  font-size: 1.05rem;
  letter-spacing: 0.04em;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.nav-login {
  min-height: 2.4rem;
  padding: 0.35rem 0.95rem;
  font-size: 0.9rem;
}

.nav-login:focus-visible,
.menu-toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.nav-links {
  display: flex;
  gap: 1.25rem;
}

.nav-links a {
  color: var(--color-text);
}

.nav-links a.router-link-active,
.nav-links a:hover,
.brand.router-link-exact-active,
.brand:hover {
  color: var(--color-accent);
}

.menu-toggle {
  display: none;
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-heading);
}

@media (max-width: 719px) {
  .menu-toggle {
    display: inline-flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    order: 3;
    width: 100%;
    padding-top: 0.5rem;
  }

  .nav-links.open {
    display: flex;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    background: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(12px);
  }
}
</style>
