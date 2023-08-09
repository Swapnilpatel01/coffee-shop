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
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router