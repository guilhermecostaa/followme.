import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainView from '../views/MainView.vue'
import Login from '../views/Login.vue'
import Backoffice from '../views/BackOffice/Backoffice.vue'

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
    component: Backoffice
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
