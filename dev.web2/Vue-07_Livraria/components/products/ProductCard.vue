<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add-to-cart'])

const comprarLivro = () => {
  emit('add-to-cart', props.product)
}

const abrirLivro = () => {
  router.push(`/livro/${props.product.id}`)
}
</script>

<template>
  <div class="product-card"  >

    <img :src="product.image" :alt="product.title" class="product-image" @click="abrirLivro"/>
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-author">{{ product.autor }}</p>
    <p class="product-price">R$ {{ product.preco.toFixed(2) }}</p>

    <button @click="comprarLivro" class="btn">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  text-align: left;

  & .product-title {
    font-size: 1.2rem;
    margin: 10px 0;
    font-weight: bold;
    color: #6F363A;
  }

  & .product-author {
    font-size: 1rem;
    margin: 2px 0;
    color: #455B68;
  }

  & .product-price {
    font-size: 1.2rem;
    margin: 5px 0;
    font-weight: bold;
    color: #6F363A;
  }

  & img {
    width: 100%;
    height: auto;
    margin-top: 10px;
    cursor: pointer;
  }

  & button {
    background-color: #6F363A;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;

  }

}

/* RESPONSIVIDADE */
.product-card { min-width: 0; width: 100%; box-sizing: border-box; margin: 0; }
.product-card img { aspect-ratio: 3 / 4; object-fit: contain; }
.product-card button { justify-content: center; width: 100%; }
.product-card .product-title { overflow-wrap: anywhere; }
@media (max-width: 600px) {
  .product-card { padding: 8px; }
  .product-card .product-title { font-size: 1.05rem; }
  .product-card .product-author { font-size: .9rem; }
  .product-card .product-price { font-size: 1.1rem; }
  .product-card button { padding: 10px 8px; font-size: .9rem; }
}

</style>
