import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Tutorial from '../views/Tutorial.vue'
import Rutinas from '../views/Rutinas.vue'
import Signin from '../views/Signin.vue'
import Settings from "@/views/Settings";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/tutorial',
        name: 'tutorial',
        component: Tutorial
    },
    {
        path: '/rutinas',
        name: 'rutinas',
        component: Rutinas
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
