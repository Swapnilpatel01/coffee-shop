import {createRouter, createWebHistory} from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";  //onAuthState added to combat firebase init error when refreshing acct only pages 
// import { resolve } from 'core-js/fn/promise';


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
    },    
    {
        path : '/cafe',
        name: 'cafe',
        component: () => import('../views/CafePage.vue')
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
        path : '/register',
        name: 'register',
        component: () => import('../views/RegisterPage.vue')
    },
    {
        path : '/cart',
        name: 'cart',
        component: () => import('../views/CartPage.vue')
    },
    {
        path: '/feed',
        name: 'feed',
        component: () => import('../views/FeedPage.vue'),
        meta: {
            requiresAuth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const getCurrentUser = () => {
  return new Promise((resolve, reject) =>{
    const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => { 
            removeListener();
            resolve(user);
        },
        reject
    );
  }); 
};

router.beforeEach(async(to, from, next) =>{
    if (to.matched.some((record) => record.meta.requiresAuth)) { //check if to route needs auth then check if any records require auth
        if (await getCurrentUser()) { //check current user in firebase
            next(); //if valid we continue on
        } else{
            alert("you dont have access!")
            next("/"); //else we redir them to home page
        }
    } else{
        next();
    }
}); //runs before vue router processes its routes 

export default router