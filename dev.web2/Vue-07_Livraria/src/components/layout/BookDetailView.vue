<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { books } from '../../data/products.js'
import headerComp from './AppHeader.vue'

const route = useRoute()

const book = computed(() =>
  books.find(item => item.id === Number(route.params.id))
)
</script>

<template>
  <headerComp/>
  <div v-if="book" class="book">
    <div class="left">
    <img :src="book.image" :alt="book.title">
    </div>

    <div class="right">
    <h1>{{ book.title }}</h1>
    <h2>{{ book.autor }}</h2>
    <p>{{ book.desc }}</p>

    <p class="price"> <i class="mdi mdi-cash-multiple"></i>R$ {{ book.preco.toFixed(2) }}</p>
    <button class="btn">
      <RouterLink to="/">
        Voltar a loja
      </RouterLink>
    </button>
    </div>
  </div>
</template>
<style scoped>
.book{
  display: flex;
  padding: 40px;
  gap: 40px;
  & .left{
    margin-top: 20px;
    & img{
      width: 250px;
      border-radius: 5px;
      box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.671);
    }
  }
  & .right{
    display: flex;
    flex-direction: column;
    & h1{
      font-size: 35px;
      color: #6F363A;
    }
    & h2{
      font-size: 30px;
      color: #455B68;
    }
    & p{
      font-size:18px;
      color: #282928;
    }
    & .price{
      font-size: 25px;
      font-weight: bold;
      color: #455B68;
      margin: 20px 0;
    }
    & button{
      background-color: #6F363A;
      width: 150px;
      height: 40px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      border: 2px solid #6F363A;
      transition: all 1s ease;


      & a{
        color: white;
        text-decoration: none;
        font-size: 1rem;
      }
    }
    & button:hover{
      background-color: #EDDDC4;
      & a{
        color: #6F363A;
      }
    }
  }
}

</style>
