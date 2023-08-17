<template>

  <div class="header">
    <img src="../assets/banner-shop.svg" alt="" class="banner">
  </div>


  <div class="main">
    <div class="sidebar">
      <h3>CATEGORIES</h3>
      <p>beans</p>
      <p>mugs</p>
      <p>accessories</p>
    </div>
  
    <!-- item arrangement -->
    <div class="content">
  
      <div v-for="item in items" :key="item.id" class="shop-item">
        <!-- <img :src="item.image" alt="item.name"> -->
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p>${{ item.price.toFixed(2) }}</p>
        <button>Add to Cart</button>
      </div>
  
    </div>
  </div>


</template>

<style scoped>

.banner{
  width: 100%;
  background-color: #BDB2A7;
}

.banner h1{
  font-size: 175px;
  font-weight: 100;
  align-items: center;
}

.main{
  display: flex;
  font-family: 'Figtree', sans-serif;
}


.sidebar{
  display: flex;
  flex-direction: column;
  float: left;
  padding: 20px;
}


.content{
  
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates three columns of equal width */
  gap: 16px; /* Spacing between grid items, adjust as needed */
  justify-content: center;
  height: 100vh;
  padding: 20px;
  width: 100%;

}

.shop-item {
  /* border: 1px solid #ccc; */
  /* padding: 20px;
  margin: 20px; */
  /* display: inline-block; */
  text-align: center;
  justify-content: center;

  /* width: 50px; */

  flex: 0 0 calc(33.33% - 40px); /**width of roughly 1/3 minus margins */
  margin: 20px;
}

.shop-item img {
  max-width: 100%;
  height: auto;
}

</style>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    fetch("/shopItems.json")
      .then(response => response.json())
      .then(data => {
        this.items = data;
      });
  },
  name: 'ShopPage'
}
</script>