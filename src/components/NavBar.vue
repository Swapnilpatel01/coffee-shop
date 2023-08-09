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
            <transition name="fade">
                <div v-if="showDropdown" class="dropdown-content">
                    <router-link class="menu-option" to="/order">Order</router-link>
                    <router-link class="menu-option" to="/menu">Menu</router-link>
                    <router-link class="menu-option" to="/about">About</router-link>
                    <!-- <a class="menu-option" href="">Order</a>
                    <a class="menu-option" href="">Menu</a>
                    <a class="menu-option" href="">About</a> -->
                </div>
            </transition>
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
    z-index: 1000;
}

.menu-icon, .navbar-links {
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

.dropbtn {
    background-color: #F1ECE9;
    color: black;
    margin: 20px;
    padding: 5px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dropdown {
    font-family: 'Figtree', sans-serif;
    position: relative;
    display: inline-block;
}

.dropdown-content {
    position: fixed;
    left: 30px;
    width: 25%;
    height: 25%;
    background-color: #fff;
    z-index: 0;
    overflow-y: auto;
    padding-top: 16px;
    border-radius: 10px;
    opacity: 1;
    transform: translateY(0); /* Slide down */
}

.menu-option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    width: auto;
    display: block;
    margin: 0 auto;
    transition: all 0.5s ease;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<script>

    export default {
        name: 'NavBar',
        data() {
            return {
                showDropdown: false
            };
        },
        methods: {
            toggleDropdown() {
                this.showDropdown = !this.showDropdown;
            }
        }
    }
</script>

