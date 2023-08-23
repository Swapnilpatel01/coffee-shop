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
        <img :src="require(`@/assets/coffeebags/${item.image}`)" alt="item.name" class="bags">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <div class="price-btn-container">
          <p class="price">${{ item.price.toFixed(2) }}</p>
          <button @click="addToCart(item)" class="btn">Add to Cart</button>
        </div>
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



.bags{
  width: 50%;
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


.content{
  
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates three columns of equal width */
  gap: 16px; /* Spacing between grid items, adjust as needed */
  justify-content: center;
  height: 100vh;
  padding: 20px;
  width: 100%;

}

.price-btn-container{
  background-color: #f9f9f9; 
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  /* gap: 10px; */
}

.price{
  font-size: 20px; 
  font-weight: bold; 
  color: #BDB2A7; 
  background-color: #f9f9f9; 
  padding: 5px 10px; 
  border-radius: 5px; 
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); Slight shadow for depth */
  margin-top: 10px; /* Space from the description */
  display: inline-block;
  margin: 0;
}



.btn {
    background-color: #8c847d; /* Coffee color */
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    /* margin-top: 10px; */
}

.btn:hover {
    background-color: #A29B91; /* Darker shade on hover */
}

.btn:active {
    transform: scale(0.98); /* Slightly scale down when clicked */
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
  name: 'ShopPage',
  emits: ['add-to-cart'],

methods: {
  addToCart(item) {
    // Emit an event to the parent component with the item to be added
    this.$emit('add-to-cart', item);
    console.log('Item added to cart:', item);
  }
}

}
</script>