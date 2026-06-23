<script setup>
import { formataPreco } from '@/utils/produtoUtils';
import ButtonChild from './ButtonChild.vue';
defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])
import ProdutoDialog from './ProdutoDialog.vue';
import { ref } from 'vue';
const mostrarDialog = ref(false);
</script>

<template>
    <div class="produto-card">
        <div>
            <h2>{{ nome }}</h2>
            <p>Preço: {{ formataPreco(preco) }}</p>
        </div>

        <div>
            <img :src="imagem" :alt="nome" class="produto-imagem"/>
        </div>
        <ButtonChild @clique="mostrarDialog = true">Editar</ButtonChild>
        <ProdutoDialog v-if="mostrarDialog" :id="id" :nome="nome" :preco="preco" :categoria="categoria" @fechar="mostrarDialog = false">
            
        </ProdutoDialog>
    </div>
</template>

<style scoped>
.produto-card {
    display: flex;

    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
}

.produto-imagem {
    height: 100px;
    width: 100px;
    object-fit: cover;
}
</style>
