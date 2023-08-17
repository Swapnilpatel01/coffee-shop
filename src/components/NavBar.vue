<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


    <nav>

        <Dropdown title="Menu" :items="services" class="dropdown"/>

        <a href="/"><img class="logo" src="../assets/CoffeeShop.svg" alt="" height="32"></a>

        <div class="navbar-icons">
            
            <!-- TODO: NEED TO STYLE THIS PROPERLY -->
            <div class="notification" v-if="notification">
                {{ notification }}
            </div> 

            <!-- <span class="material-symbols-outlined"><a class="navbar-links" href="#menu">Search</a></span> -->
            <a href="#menu">
                <img src="../assets/icons/search_FILL0_wght400_GRAD0_opsz40.svg" class="navbar-links" alt="">
            </a>

            <!-- <span class="material-symbols-outlined"><a class="navbar-links" href="login" @click="goToLogin">account_circle</a></span> -->
            <!-- <a class="navbar-links" href="login" @click="handleSignOut" v-if="isLoggedIn" style="font-size: large;">Sign Out</a> -->
                       

            <!-- Display sign out icon if user is logged in -->
            <!-- <span class="material-symbols-outlined" v-if="isLoggedIn">
                <a class="navbar-links" @click="handleSignOut">logout</a>
            </span> -->

            <a href="" @click="handleSignOut" v-if="isLoggedIn">
                <img src="../assets/icons/logout_FILL0_wght400_GRAD0_opsz48.svg" class="navbar-links" >
            </a>
            
            <!-- Display account_circle icon if user is not logged in -->
            <!-- <span class="material-symbols-outlined" v-else>
                <a class="navbar-links" href="login" @click="goToLogin">account_circle</a>
            </span> -->

            <a href="login" v-else @click="goToLogin">
                <img src="../assets/icons/account_circle_FILL0_wght400_GRAD0_opsz40.svg" class="navbar-links" alt="">
            </a>


            <a href="cart" @click="goToCart">
                <img src="../assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg" class="navbar-links" alt="">
            </a>
            

            <!-- <div>
                <span class="material-symbols-outlined"><a class="navbar-links" href="cart" @click="goToCart">shopping_cart</a></span>
            </div> -->

        </div>

    </nav>

</template>

<script>
/* eslint-disable */ 
   import Dropdown from './Dropdown.vue';
   import { onMounted, ref } from 'vue';
   import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
   import router from '@/router';

   export default {
    name: 'NavBar',
    components: {
        Dropdown
    },
    setup() {
        const isLoggedIn = ref(false); //changes as auth state changes
        const notification = ref("") 
        
        let auth;
            onMounted(() => {
            auth = getAuth();
                onAuthStateChanged(auth, (user) => {
                    if(user){
                        isLoggedIn.value = true;
                    }
                    else{
                        isLoggedIn.value = false;
                    }
                });
        });

        const handleSignOut = () => {
            signOut(auth).then(() => {
                isLoggedIn.value = false;
                notification.value = "You have successfully signed out.";
                console.log("signed out");
                
                setTimeout(() => {
                    notification.value = '';
                }, 5000)

                router.push("/");
            })
            .catch((error) => {
                console.error("Error signing out:", error)
            });
        };

        return {
            isLoggedIn,
            handleSignOut,
            notification
        };
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
            ]
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
    padding-left: 64px;
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
}

.navbar-icons a::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: black; 
    bottom: 0;
    left: 50%;
    transition: all 0.3s ease-out;
}

.navbar-icons a:hover {
    font-weight: bold;
}

.navbar-icons a:hover::after {
    width: 100%; /* Full width on hover */
    left: 0; /* Align to the left */
}


.navbar-links {
    text-decoration: none !important;
    color: inherit;
    cursor: pointer;
    width: 30px;
}

.notification {
  background-color: #e8f5e9; /* A light green shade for successful messages */
  border: 1px solid #4CAF50; /* Green border */
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
}

</style>
