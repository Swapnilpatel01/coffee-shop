<template>
  <main>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <img src="../assets/homepage.svg" alt="" width="700" class="pic">


  <div>
    <div class="view-menu" @click="scrollToSection">
        <p>View Menu</p>
        <span class="material-symbols-outlined arrow">expand_more</span>
    </div>
      <img src="../assets/menu.png" class="menupic">
  </div>

  </main>


</template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      scrollToSection() {
        const image = document.querySelector('.menupic');
        if (image) {
          image.scrollIntoView({behavior: 'smooth'})
        }
      },
    },
  };
  </script>
  
  <style scoped>

    .pic{
      margin-top: 1vw;
      padding-right: 150px;
      opacity: 0;
      animation: fadeIn 2s forwards;
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
      opacity: 0;
      animation: fadeIn 2s forwards;
      animation-delay: 1s;
      cursor: pointer;
    }

    .view-menu p{
      font-size: large;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .menupic{
      margin-top: 200px;
      width: 90%;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    .arrow {
        animation: fadeIn 2s forwards;
        animation: bounce 2s 3;
        animation-delay: 2s;
    }

  </style>

