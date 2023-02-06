import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('../views/HomeView.vue')
      // route level code-splitting
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

const requireAuth = [
  '/',
  '/dashboard',
  '/about'
]
let access = '' /** your access or token key here */

router.beforeEach((to, from, next) => {
  if (requireAuth.includes(to.path) || requireAuth.includes(to.path)) {
    next()
  } else if (!access) {
    next({ name: 'login' })
  } else {
    next()
  }
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
