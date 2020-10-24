import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Tutorial from '../views/Tutorial.vue';
import Rutinas from '../views/Rutinas2.vue';
import Signin from '../views/Signin.vue';
import Explore from "@/views/Explore";
import ConfirmEmail from "../views/ConfirmEmail";
import NewExercise from "@/views/NewExercise";
import Test from "@/views/Test";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/createExercise',
        name: 'newexercise',
        component: NewExercise
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
    },
    {
        path: '/explore',
        name: 'explore',
        component: Explore
    },{
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/verifyEmail',
        name: 'verifyEmail',
        component: ConfirmEmail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
