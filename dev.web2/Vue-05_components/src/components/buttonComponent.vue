<script setup>
import {ref} from 'vue'
import ButtonChild from './components/buttonChild.vue'
let acoes = ref([
  { id: 1, nome: 'Novo', tipo: 'novo' },
  { id: 2, nome: 'Editar', tipo: 'editar' },
  { id: 3, nome: 'Salvar', tipo: 'salvar' },
  { id: 4, nome: 'Cancelar', tipo: 'cancelar' },
  { id: 5, nome: 'Excluir', tipo: 'excluir' },
]);

function clickButton(mensagem) {
  alert(`Você clicou no botão ${mensagem}!`);
}
</script>

<template>
  <div class="container">
    <div>
      <buttonChild v-for="acao in acoes"
      :key="acao.id"
      :nome="acao.nome"
      :tipo="acao.tipo"
      estilo='btn'
      @click="clickButton"
      >
        {{acao.nome}}
      </buttonChild>
    </div>
  </div>
</template>

<style scoped>
</style>
