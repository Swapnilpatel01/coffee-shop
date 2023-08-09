<template>
    <h1>THIS IS THE HOME PAGE</h1>
    <h1>Transition + Transform</h1>

    <p>Hover over the div element below:</p>

    <div></div>





</template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>

div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 2s, transform 2s;
}

div:hover {
  width: 300px;
  height: 300px;
  transform: rotate(180deg);
}

  </style>

