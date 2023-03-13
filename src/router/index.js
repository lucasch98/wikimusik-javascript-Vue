import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home.vue'
import Banda from '../Views/Banda.vue'
import Bandas from '../Views/Bandas.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
        path:'/banda/:id',
        name: 'banda',
        component: Banda
    },
  
    {
        path: '/bandas',
        name: 'bandas',
        component: Bandas
    }
] 

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router