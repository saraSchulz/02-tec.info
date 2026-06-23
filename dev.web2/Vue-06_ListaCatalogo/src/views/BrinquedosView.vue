<script setup>
import { ref } from 'vue'
import { listaProdutos } from "@/data/produtos"
import { formataPreco } from '@/utils/produtoUtils'
const produtos = ref(listaProdutos)
produtos.value = produtos.value.filter((p) => p.categoria === 'Brinquedos')


</script>

<template>

    <div class="container">
         
        <h1>Brinquedos</h1>

        <div class="produtos">
            
            <div v-for="produto in produtos" :key="produto.id" class="produto-card">

                <img :src="produto.imagem" :alt="produto.nome" />
                <h2>{{ produto.nome }}</h2>
                <p>Preço: {{ formataPreco(produto.preco) }}</p>

            </div>

        </div>

    </div>

</template>

<style scoped>

</style>
