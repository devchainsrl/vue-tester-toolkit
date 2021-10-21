import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SiteDisabled from '../views/SiteDisabled.vue'
import HttpTester from '../views/Testers/HttpTester.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ts/http',
    name: 'Http',
    component: HttpTester
  },
  {
    path: '/disabled',
    name: 'SiteDisabled',
    component: SiteDisabled
    // optimized below
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

console.log('CBUx', process.env.BASE_URL)
console.log('TXT', process.env.TEST_TEXT)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
