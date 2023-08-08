<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  <NavBar/>
  <HomePage/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage
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
</style>
