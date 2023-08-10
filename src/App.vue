<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
  
  <header>
    <NavBar/>
  </header>


  <div>
    <router-view v-slot="{Component}">
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
  width: 100vw;
  background-color: #F1ECE9;
  padding: 15px;
  /* overflow-x: hidden; */
  box-sizing: border-box;

}
</style>
