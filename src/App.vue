<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  
  <header>
    <NavBar/>
  </header>


  <div>
    <router-view v-slot="{Component}" class="router" @add-to-cart="handleAddToCart" :cart="cart">
    <transition>
      <Component :is="Component" />
    </transition>
    </router-view>
  </div>


</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart') || '[]')
    };
  },
  
methods: {
  handleAddToCart(item) {
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log('Cart updated:', this.cart);
  }
},
components: {
    NavBar
  }
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #F1ECE9;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}


header{
  width: screen;
  background-color: #F1ECE9;
  padding: 15px;
  box-sizing: border-box;

}


.router{
  overflow-x: hidden;
}
</style>
