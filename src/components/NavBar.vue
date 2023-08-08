<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <nav class="navbar">

        <div class="dropdown">
            <button class="dropbtn" @click="toggleDropdown">
                <span class="material-symbols-outlined" v-if="!showDropdown">
                    <a class="menu-icon" href="#menu">Menu</a>
                </span>
                <span class="material-symbols-outlined" v-if="showDropdown">
                    <a class="menu-icon" href="#menu">Close</a>
                </span>
            </button>

            <div v-if="showDropdown" class="dropdown-content" :class="{ show: showDropdown }">
                <a class="menu-option" href="">Order</a>
                <a class="menu-option" href="">Menu</a>
                <a class="menu-option" href="">About</a>
            </div>
        </div>


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

  
<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-icon,
    .navbar-links{
        text-decoration: none !important; 
        color: inherit;
    }

    .logo {
        width: 200px; 
        display: block;
        margin: 0 auto;
        padding-left: 32px;
    }


    .navbar-icons {
        display: flex;
        gap: 30px; 
        margin-right: 30px;
    }

    .navbar-links{
        padding: 5px;
    }

    /* DROP DOWN STUFF */
    .dropdown{
        display: flex;
        font-family: 'Figtree', sans-serif;

    }

    .menubtn,
    .dropbtn{
        background-color: #F1ECE9;
        color: black;
        margin: 20px;
        padding: 5px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        
        /* transition: background-color 0.3 ease; */
        
    }

    .closebtn{
        float:left
    }

    .dropbtn:hover, .dropbtn:focus, .navbar-links:hover, .navbar-links:focus {
        background-color: aqua;
    }


    .dropdown{
        position: relative;
        display: inline-block;
    }

    /* Dropdown content styles */
    .dropdown-content {
    position: fixed;
    left: 30px;
    width: 25%;
    height: 25%;
    background-color: #fff;
    z-index: 1000;
    overflow-y: auto;
    padding-top: 16px; /* Space for the close button */
    border-radius: 10px; 

    /* transtion */
    opacity: 0;
    transition: opacity 1s ease;
    visibility: hidden;
    }

    .dropdown-content.show {
        opacity: 1;
        visibility: visible;
    }

    .menu-option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    width: auto;
    display: block;
    margin: 0 auto; /* Centers the links */
    }

    .dropdown-content a:hover {
    background-color: #f1f1f1;
    }


</style>

<!-- export  -->
<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                showDropdown: false // Controls whether the dropdown is shown or hidden
            };
        },
        methods: {
            toggleDropdown() {
                this.showDropdown = !this.showDropdown; // Toggles the dropdown's visibility
            }
        }
    }
</script>
