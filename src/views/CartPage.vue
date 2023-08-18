
<template>
  <div>
    <h1>Shopping Cart Page</h1>
    <div v-if="cart && cart.length">
      <div v-for="cartItem in cart" :key="cartItem.id" class="cart-item">
        <h2>{{ cartItem.name }}</h2>
        <p>{{ cartItem.description }}</p>
        <p>${{ cartItem.price.toFixed(2) }}</p>
      </div>
    </div>
    <p v-else>No items in the cart.</p>
  </div>
</template>

<style scoped>
.cart-item {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  text-align: center;
}
</style>

<script>
export default {
  name: 'CartPage',
  created() {
    console.log('CartPage created');
  },
  beforeUnmount() {
    console.log('CartPage about to be destroyed');
  },
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  }
}
</script>
