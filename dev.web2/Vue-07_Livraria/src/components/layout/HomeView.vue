<script setup>
import { ref, computed } from 'vue'
import ProductList from '../products/ProductList.vue'
import CartPanel from '../cart/CartPanel.vue'
import Header from './AppHeader.vue'


const currentScreen = ref('vitrine')
const mockCart = ref([])

const addedBookTitle = ref(null)

const calculateTotal = computed(() => {
  return mockCart.value.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
})

const handleAddToCartInApp = (product) => {
  const existingItem = mockCart.value.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantidade++
    addedBookTitle.value = `"${product.title}" já está no carrinho! `
  } else {

    mockCart.value.push({ ...product, quantidade: 1 })

    addedBookTitle.value = `"${product.title}" `
  }

  setTimeout(() => {
    addedBookTitle.value = null
  }, 1000)
}

const addQuantity = (item) => {
  item.quantidade++
}

const removeQuantity = (item) => {
  if (item.quantidade > 1) {
    item.quantidade--
  } else {
    mockCart.value = mockCart.value.filter((cartItem) => cartItem.id !== item.id)
  }
}
</script>

<template>

  <Header @open-cart="currentScreen = 'carrinho'" />

  <div id="app-container">

    <main class="main-content">

      <ProductList v-if="currentScreen === 'vitrine'" @add-to-cart="handleAddToCartInApp" />

      <div v-else-if="currentScreen === 'carrinho'">
        <div v-if="mockCart.length === 0" class="empty-cart-message">
          <h2>Seu carrinho está vazio</h2>
          <p>Você não possui livros no seu carrinho no momento.</p>
          <button @click="currentScreen = 'vitrine'" class="btn-continue">Escolher Livros</button>
        </div>

        <CartPanel v-else :cartItems="mockCart" :cartTotal="calculateTotal" @increase-qty="addQuantity"
          @decrease-qty="removeQuantity" @go-to-store="currentScreen = 'vitrine'" />
      </div>
    </main>

  </div>
</template>

<style scoped>
#app-container {
  width: 100%;
  min-height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
}

.floating-navigation {
  position: absolute;
  top: 20px;
  right: 40px;
  z-index: 1000;
}

.floating-navigation button {
  background-color: rgba(34, 36, 83, 0.08);
  color: #532222;
  border: 1px solid #532222;
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.floating-navigation button.active {
  background-color: #693339;
  color: #ede2cf;
  border-color: #693339;
}

.main-content {
  width: 100%;
  flex: 1;
}

.empty-cart-message {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #532222;
  gap: 16px;
  font-family: sans-serif;
}

.empty-cart-message h2 {
  font-size: 2rem;
  font-weight: 700;
}

.btn-continue {
  background-color: #693339;
  color: #ede2cf;
  border: none;
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-continue:hover {
  background-color: #54282d;
}
</style>
