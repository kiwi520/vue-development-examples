import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constRoutes= [
    {
        path:'/login',
        component: () => import('@views/Login'),
        hidden:true //导航菜单忽略此项
    },
    {
        path: '/',
        component: Layout, //应用布局
        redirect: '/home',
        children: [
            {
                path: 'home'
            }
        ]
    }
]
