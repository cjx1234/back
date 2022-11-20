import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main";

import Login from "../views/Login"

Vue.use(VueRouter)

const routes = [
    // 主路由
    {
        path: '/',
        redirect: '/home',
        name:'Main',
        component: Main,
        children: [           
        ]
    },
    //登录路由
    {
        path:'/login',
        name:'login',       
        component:Login,
    }
]

const router = new VueRouter({
    routes
})

export default router
