<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


    <nav>

        <Dropdown title="Menu" :items="services" class="dropdown"/>


        <img class="logo" src="../assets/CoffeeShop.svg" alt="" height="32">

        <div class="navbar-icons">
            <span class="material-symbols-outlined"><a class="navbar-links" href="#menu">Search</a></span>
            <span class="material-symbols-outlined"><a class="navbar-links" href="#menu">account_circle</a></span>
            <div>
                <span class="material-symbols-outlined"><a class="navbar-links" href="#menu">shopping_cart</a></span>
            </div>
        </div>
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
                    link: '#'
                },
                {
                    title: 'Order',
                    link: '#'
                },
                {
                    title: 'Contact',
                    link: '#'
                },
            ]
        };
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
    padding-left: 32px;
}


.navbar-icons {
    display: flex;
    gap: 20px;
    margin-right: 30px;
}

.navbar-icons a {
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
}

.navbar-links {
    text-decoration: none !important;
    color: inherit;
}



</style>
