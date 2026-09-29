import { MOCK_USERS } from '@/mock/users'

export const authService = {
  login(username, password) {
    const user = MOCK_USERS.find(
      u => u.username === username && u.password === password
    )
    if (user) {
      // Duplication et suppression du mot de passe pour ESLint
      const userSession = { ...user }
      delete userSession.password
      
      localStorage.setItem('user', JSON.stringify(userSession))
      return userSession
    }
    return null
  },

  logout() {
    localStorage.removeItem('user')
  },

  getCurrentUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  isAuthenticated() {
    return !!localStorage.getItem('user')
  }
}