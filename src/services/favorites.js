const FAVORITES_KEY_PREFIX = 'user_favorites_'

export const favoritesService = {
  getFavorites(userId) {
    if (!userId) return []
    const data = localStorage.getItem(`${FAVORITES_KEY_PREFIX}${userId}`)
    return data ? JSON.parse(data) : []
  },

  toggleFavorite(userId, serviceId) {
    if (!userId) return []
    let favorites = this.getFavorites(userId)
    const targetId = String(serviceId) // <-- Normalisation en String
    
    // Normalisation de tout le tableau pour la recherche
    const exists = favorites.some(id => String(id) === targetId)

    if (exists) {
      favorites = favorites.filter(id => String(id) !== targetId)
    } else {
      favorites.push(targetId)
    }

    localStorage.setItem(`${FAVORITES_KEY_PREFIX}${userId}`, JSON.stringify(favorites))
    return favorites
  }
}