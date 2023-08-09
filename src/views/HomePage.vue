<template>
  <main>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <img src="../assets/homepage.svg" alt="" width="700" class="pic">



    <div class="view-menu">
      <p>View Menu</p>
      <span class="material-symbols-outlined">expand_more</span>
    </div>

    <br>
    <br>
    
    <div>
      <img src="../assets/menu.png" alt="">
    </div>


  </main>


</template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>

    .pic{
      margin-top: 1vw;
      padding-right: 150px;
    }

    .view-menu{
      font-family: 'Figtree', sans-serif;
      position: relative;; /* Fixed positioning */
      bottom: 1vmin; /* Position at the bottom of the screen */
      left: 0; /* Align to the left */
      width: 100%; /* Take up the full width */
      text-align: center; /* Center the text */
      /* background-color: rgba(255, 255, 255, 0.8); Optional background color */
      padding: 10px; /* Optional padding */
    }

    .view-menu p{
      font-size: large;
    }

  </style>

