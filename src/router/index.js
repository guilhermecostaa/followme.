import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainView from '../views/MainView.vue'
import Login from '../views/Login.vue'
import Backoffice from '../views/BackOffice/Backoffice.vue'
import BackofficeUsers from '../views/BackOffice/BackofficeUsers.vue'
import BackofficePontosInteresse from '../views/BackOffice/BackofficePontosInteresse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      requiresNotAuth: true
    }
  },
  {
    path: '/home',
    component: MainView,
    children: [{
      path: '',
      name: 'home',
      component: Home
    }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/backoffice',
    name: 'backoffice',
    component: Backoffice,
    children: [
      {
        path: 'users',
        name: 'backofficeUsers',
        component: BackofficeUsers
      },
      {
        path: 'pontosinteresse',
        name: 'backofficePontosInteresse',
        component: BackofficePontosInteresse
      }
    ],
    meta: {
      requiresAuth: true,
      requiresAdminAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import store from '@/store/index.js'

router.beforeEach((to, from, next) => {
  let loggedUser = localStorage.loggedUserId ? parseInt(localStorage.loggedUserId) : 0
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (loggedUser === 0) {
      next({
        name: 'login'
      })
    } else if(to.matched.some(route => route.meta.requiresAdminAuth)){
      if (store.getters.getUserTypeById(loggedUser) === "user") {
        next({
          name: 'home'
        })
      }
    }
  }
  if (to.matched.some(route => route.meta.requiresNotAuth)) {
    if (loggedUser !== 0) {
      next({
        name: 'home'
      })
    }
  }
  next()
})

export default router
