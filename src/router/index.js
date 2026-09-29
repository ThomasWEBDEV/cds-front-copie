import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import HomeView from '@/views/HomeView.vue'
import { authService } from '@/services/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated()

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/')
  } else if (to.path === '/' && isAuthenticated) {
    next('/home')
  } else {
    next()
  }
})

export default router