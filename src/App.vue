<script setup>
import { computed, ref } from 'vue'
import CheckoutDrawer from './components/CheckoutDrawer.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import OrderSuccess from './components/OrderSuccess.vue'

/* GLOBAL STATE */
const cart = ref([])
const showCheckout = ref(false)
const orderSuccess = ref(false)

/* CART ACTIONS */
function addToCart(item) {
  const found = cart.value.find(i => i.name === item.name)
  found ? found.qty++ : cart.value.push({ ...item, qty: 1 })
}

function removeFromCart(item) {
  const i = cart.value.findIndex(x => x.name === item.name)
  if (i !== -1) {
    cart.value[i].qty > 1
      ? cart.value[i].qty--
      : cart.value.splice(i, 1)
  }
}

/* ORDER SUBMIT */
function handleOrderSubmit(order) {
  showCheckout.value = false
  orderSuccess.value = true
  cart.value.splice(0) // clear cart
}

/* COMPUTED */
const cartCount = computed(() =>
  cart.value.reduce((s, i) => s + i.qty, 0)
)

const cartTotal = computed(() =>
  cart.value.reduce((s, i) => s + i.price * i.qty, 0)
)
</script>

<template>
  <!-- NAVBAR -->
  <Navbar
    :cart-count="cartCount"
    @open-cart="showCheckout = true"
  />

  <!-- PAGES -->
  <router-view
    :cart="cart"
    @add-to-cart="addToCart"
    @open-checkout="showCheckout = true"
  />

  <!-- CHECKOUT -->
  <CheckoutDrawer
    :open="showCheckout"
    :cart="cart"
    :total="cartTotal"
    @close="showCheckout = false"
    @increase="addToCart"
    @decrease="removeFromCart"
    @submit="handleOrderSubmit"
  />

  <!-- ORDER SUCCESS -->
  <OrderSuccess
    :open="orderSuccess"
    @close="orderSuccess = false"
  />

  <!-- FOOTER -->
  <Footer />
</template>
