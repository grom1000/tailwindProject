import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/profile'
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let flag = JSON.parse(localStorage.getItem('flag'))
  if (to.meta.requiresAuth) {
    if (flag) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})


export default router
