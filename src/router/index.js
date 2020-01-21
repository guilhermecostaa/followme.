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
    component: Login
  },
  {
    path: '/home',
    component: MainView,
    children: [{
      path: '',
      name: 'home',
      component: Home
    }]
  },
  {
    path: '/backoffice',
    name: 'backoffice',
    component: Backoffice,
    children: [
      {
        path: '/backoffice/users',
        name: 'backofficeUsers',
        component: BackofficeUsers
      },
      {
        path: '/backoffice/users',
        name: 'backofficeUsers',
        component: BackofficeUsers
      },
      {
        path: '/backoffice/pontosinteresse',
        name: 'backofficePontosInteresse',
        component: BackofficePontosInteresse
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
