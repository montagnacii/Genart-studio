import { computed, readonly, ref } from 'vue'
import { MOCK_USER } from '../auth/mockUser'
import type { AuthUser } from '../auth/types'

const user = ref<AuthUser | null>(null)
const isLoginOpen = ref(false)
const isAccountOpen = ref(false)

function applyMockSession() {
  user.value = { ...MOCK_USER }
}

export function useAuth() {
  const isLoggedIn = computed(() => user.value !== null)

  function openLogin() {
    isLoginOpen.value = true
  }

  function closeLogin() {
    isLoginOpen.value = false
  }

  function openAccount() {
    isAccountOpen.value = true
  }

  function closeAccount() {
    isAccountOpen.value = false
  }

  /**
   * 僅做欄位通過後的展示切換。不驗證帳號、不保存密碼。
   * 成功後一律套用 MOCK_USER。
   */
  async function loginForDemo(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 700))
    applyMockSession()
    isLoginOpen.value = false
  }

  function loginAsMockUser() {
    applyMockSession()
    isLoginOpen.value = false
  }

  function logout() {
    user.value = null
    isAccountOpen.value = false
  }

  return {
    user: readonly(user),
    isLoggedIn,
    isLoginOpen,
    isAccountOpen,
    openLogin,
    closeLogin,
    openAccount,
    closeAccount,
    loginForDemo,
    loginAsMockUser,
    logout,
  }
}
