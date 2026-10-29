import type { AuthUser } from './types'

/** 前端展示用假資料，不是真實帳號。 */
export const MOCK_USER: AuthUser = {
  id: 'mock-demo-user',
  name: '展示用使用者',
  email: 'demo.user@example.com',
  initials: '展',
  label: '展示用假資料',
}
