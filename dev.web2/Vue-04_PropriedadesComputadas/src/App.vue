<script setup>
import { computed, ref } from 'vue'

const nome = ref('');
const sobrenome = ref('');
const nomes = ref(['João Silva', 'Maria Rosa', 'Pedro Santos']);
const texto = ref('');

const nomecompleto = computed(()=> {
  console.log('Calculando nome completo...');
  return `${nome.value} ${sobrenome.value}`;
});
const nomecompleto2  = ()=> {
  console.log('Calculando nome completo 2...');
  return `${nome.value} ${sobrenome.value}`;
};
</script>

<template>
  <div class="container">
    <input type="text" v-model="nome">
    <input type="text" v-model="sobrenome">
    <p>Nome completo: {{ nomecompleto }}</p>
    <p>Nome completo 2: {{ nomecompleto2() }}</p>
    <input type="text" v-model="texto" placeholder="Digite algo...">
    <ul>
      <li v-for="nome in nomes" :key="nome">
        {{ nome }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
</style>
