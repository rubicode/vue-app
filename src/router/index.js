import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import LoginView from '../views/LoginView.vue'
import { getUser } from '@/services/storage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosView
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

router.beforeEach((to, from, next) => {
  const user = getUser()
  if (to.name !== 'login' && !user?.token) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
