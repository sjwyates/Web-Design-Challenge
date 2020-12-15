import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Landing from '../views/Visualization.vue'
import Landing from '../views/Comparisons.vue'
import Landing from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/plots/:id',
    name: 'Visualization',
    component: Visualization
  },
  {
    path: '/comparisons',
    name: 'Comparisons',
    component: Comparisons
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
