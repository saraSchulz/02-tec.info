<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import featuredComponent from '../layout/home/featuredComponent.vue'
import heroComponent from '../layout/home/heroComponent.vue'

import * as products from '../../data/products.js'

const bookList = ref(products.books)

const emit = defineEmits(['add-to-cart'])

const handleAddToCart = (product) => {

  emit('add-to-cart', product)
}
</script>

<template>
  <heroComponent />
  <featuredComponent />
  <div class="product-list-container">
    <h2 class="store-title">Nosso Catálogo de Livros</h2>

    <div class="products-grid">
      <ProductCard v-for="item in bookList" :key="item.id" :product="item" @add-to-cart="handleAddToCart" />
    </div>
  </div>
</template>

<style scoped>
.product-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
}

.store-title {
  font-size: 2rem;
  font-weight: 700;
  color: #532222;
  margin-bottom: 30px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
}
</style>
