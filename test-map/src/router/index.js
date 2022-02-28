import Vue from 'vue'
import VueRouter from 'vue-router'


import Map from "@/components/Map"
import Sliding from "@/components/Sliding"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Map',
    component: Map
  },
  {
    path: '/sliding',
    name: 'Sliding',
    component: Sliding
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
