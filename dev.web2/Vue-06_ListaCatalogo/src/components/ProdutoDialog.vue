<script setup>
import ButtonChild from './ButtonChild.vue'
import { formataPreco } from '@/utils/produtoUtils.js'
import { ref } from 'vue'
import { listaProdutos } from '@/data/produtos.js'
const props = defineProps(['id', 'nome', 'preco', 'categoria'])
const emit = defineEmits(['fechar'])
const novopreco = ref(0)
novopreco.value = props.preco

function atualizaPreco() {
  const produtos = ref(listaProdutos)
  produtos.value[produtos.value.findIndex((p) => p.id == props.id)].preco = novopreco.value;

  emit('fechar')
}
</script>

<template>
  <div class="overlay">
    <div class="produto-dialog">
      <h2>{{ props.nome }}</h2>
      <h3>ID: {{ props.id }}</h3>
      <p>Preço: {{ formataPreco(props.preco) }}</p>
      <p>Categoria: {{ props.categoria }}</p>
      <input type="number" v-model.number="novopreco" />
      <ButtonChild @clique="atualizaPreco">Corrigir Preço</ButtonChild>
      <ButtonChild @clique="emit('fechar')">Fechar</ButtonChild>
    </div>
  </div>
</template>

<style scoped>
.produto-dialog {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 24px;
  min-width: 320px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
</style>
