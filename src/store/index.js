import Vue from 'vue'
import Vuex from 'vuex'
import domainesData from '@/json/domaines.json'
import servicesData from '@/json/services.json'

Vue.use(Vuex)

// Faux utilisateurs pour tester les rôles (STF-5)
const FAKE_USERS = [
  { id: 1, name: 'Thomas FERET', firstName: 'Thomas', email: 't.feret@kermene.fr', role: 'ADMIN' },
  { id: 2, name: 'Marie DUPONT', firstName: 'Marie', email: 'm.dupont@kermene.fr', role: 'USER' }
]

export default new Vuex.Store({
  state: {
    domaines: [],
    services: [],
    user: JSON.parse(localStorage.getItem('user')) || FAKE_USERS[0], // Thomas par défaut
    searchQuery: '',
    favorisIds: [1, 2]
  },
  getters: {
    allDomaines: state => state.domaines,
    activeServices: state => state.services.filter(s => s.enabled),
    isAuthenticated: state => !!state.user,
    currentUser: state => state.user,
    isAdmin: state => state.user && state.user.role === 'ADMIN',
    userFirstName: state => (state.user && state.user.firstName) ? state.user.firstName : 'Thomas',
    searchQuery: state => state.searchQuery,
    favorisIds: state => state.favorisIds
  },
  mutations: {
    SET_DATA(state) {
      state.domaines = domainesData
      state.services = servicesData
    },
    SET_USER(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    LOGOUT(state) {
      state.user = null
      localStorage.removeItem('user')
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query
    },
    TOGGLE_FAVORI(state, serviceId) {
      const index = state.favorisIds.indexOf(serviceId)
      if (index === -1) {
        state.favorisIds.push(serviceId)
      } else {
        state.favorisIds.splice(index, 1)
      }
    }
  },
  actions: {
    initData({ commit }) {
      commit('SET_DATA')
    },
    login({ commit }, selectedRole) {
      const foundUser = FAKE_USERS.find(u => u.role === selectedRole) || FAKE_USERS[0]
      commit('SET_USER', foundUser)
    },
    logout({ commit }) {
      commit('LOGOUT')
    }
  }
})