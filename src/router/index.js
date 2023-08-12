import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path : '/',
        name: 'home',
        component: () => import('../views/HomePage.vue')
    },
    {
        path : '/shop',
        name: 'shop',
        component: () => import('../views/ShopPage.vue')
    },    {
        path : '/order',
        name: 'order',
        component: () => import('../views/OrderPage.vue')
    },
    {
        path : '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue')
    },
    {
        path : '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue')
    },
    {
        path : '/cart',
        name: 'cart',
        component: () => import('../views/CartPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router