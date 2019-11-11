import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import LoginForm from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage,
    // meta: { requiresAuth: true },
    beforeEnter (to, from, next) {
      if (localStorage.getItem('email') != '' && localStorage.getItem('password') != '') {
        next('/profile')
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    // meta: { requiresAuth: true },
    beforeEnter (to, from, next) {
      if (localStorage.getItem('email') != '' && localStorage.getItem('password') != '') {
        next()
      } else {
        next('/login')
      }
    }
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


export default router
