<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


    <nav>
        <transition name="slide-fade" appear>
            <Dropdown title="Menu" :items="services" :isOpen="isOpen" @toggleMenu="isOpen = !isOpen" class="dropdown"/>
        </transition>

        <a href="/"><img class="logo" src="../assets/CoffeeShop.svg" alt="" height="32"></a>
    
        <transition name="slide-fade2" appear>
            <div class="navbar-icons">
                <span class="material-symbols-outlined"><a class="navbar-links" href="#menu">Search</a></span>
                <span class="material-symbols-outlined"><a class="navbar-links" href="login" @click="goToLogin">account_circle</a></span>
                <div>
                    <span class="material-symbols-outlined"><a class="navbar-links" href="cart" @click="goToCart">shopping_cart</a></span>
                </div>
            </div>
        </transition>    

    </nav>

</template>

<script>
   import Dropdown from './Dropdown.vue';


   export default {
    name: 'NavBar',
    components: {
        Dropdown
    },
    data() {
        return {
            services: [
                {
                    title: 'Shop',
                    link: '/shop'
                },
                {
                    title: 'Café',
                    link: '/cafe'
                },
                {
                    title: 'About',
                    link: '/about'
                }
            ],
            isOpen: false,
        };
    },
    methods: {
        goToLogin() {
            this.$router.push('/login');
        },
        goToCart() {
            this.$router.push('/cart');
        }
    }
}


</script>


<style>

nav{
    font-family: 'Figtree', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 15px; */


}

nav .menu-item{
    color: black;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.5s;
}

nav .menu-item a{
    color: inherit;
    text-decoration: none;
}

.dropdown{
    float: left;
}

.logo {
    width: 200px;
    display: block;
    margin: 0 auto;
    padding-left: 84px; /*change if needed*/
}

.navbar-icons {
    display: flex;
    gap: 10px;
    margin-right: 30px;
}


/* OLD ANIMATION AND ICONS */
/* .navbar-icons a {
    transition: all 0.5s ease;
    background: #F1ECE9;
    border-radius: 100px;
    padding: 10px;
    box-shadow: 8px 8px 16px #d1cdc5, -8px -8px 16px #ffffff;
    display: inline-block;
}

.navbar-icons a:hover {
    background-color: #e0dbd8;
    box-shadow: inset 4px 4px 8px #d1cdc5, inset -4px -4px 8px #ffffff;
} */


.navbar-icons a {
    position: relative; /* Added */
    transition: all 0.5s ease-out;
    border-radius: 100px;
    padding: 10px;
    display: inline-block;
    font-size: 28px;
    font-weight: 400;
}

.navbar-icons a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: black; /* Color of the underline */
    bottom: 0;
    left: 50%;
    transition: all 0.3s ease-out;
}

.navbar-icons a:hover {
    font-weight: 600;
}

.navbar-icons a:hover::after {
    width: 100%; /* Full width on hover */
    left: 0; /* Align to the left */
}


.navbar-links {
    text-decoration: none !important;
    color: inherit;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    /* transform: translateY(-10%);  */
    transform: translateX(-100%); 
    
}

.slide-fade-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}


.slide-fade2-enter-from,
.slide-fade2-leave-to {
    opacity: 0;
    /* transform: translateY(-10%);  */
    transform: translateX(100%); 
    
}

.slide-fade2-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.slide-fade2-enter-active,
.slide-fade2-leave-active {
    transition: all 0.5s ease;
}

</style>
