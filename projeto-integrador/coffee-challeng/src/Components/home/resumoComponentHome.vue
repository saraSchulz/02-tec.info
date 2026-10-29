<script setup>
import { computed } from 'vue'
import { coffees, calcularMedia } from '../../data/coffee.js'

// Total de cafés
const totalCoffees = computed(() => coffees.length)

// Café com a maior média
const melhorCafe = computed(() => {
  return coffees.reduce((melhor, atual) => {
    return calcularMedia(atual) > calcularMedia(melhor)
      ? atual
      : melhor
  })
})

// Média do melhor café
const melhorMedia = computed(() => {
  return calcularMedia(melhorCafe.value)
})

// Líder do ranking
const liderCafe = computed(() => melhorCafe.value)

// Última avaliação
const ultimaAvaliacao = computed(() => {
  return coffees[coffees.length - 1]
})
</script>

<template>
  <div class="component">
  <h1>Resumo do sisitema</h1>

  <div class="resumo">
    <div class="card">
      <i class="mdi mdi-coffee"></i>
      <h2>Total de Cafés</h2>
      <p class="info">{{ totalCoffees }}</p>
      <p class="text">Total de Cafés Registrados</p>
    </div>
    <div class="card">
      <i class="mdi mdi-file-edit"></i>
      <h2>Melhor Café</h2>
      <p class="info">{{ melhorMedia  }}</p>
      <p class="text">Maior media Registrada</p>
    </div>
    <div class="card">
      <i class="mdi mdi-star"></i>
      <h2>Líder do Ranking</h2>
      <p class="info">{{ liderCafe.nome }}</p>
      <p class="text">Café com a melhor média</p>
    </div>
    <div class="card">
      <i class="mdi mdi-calendar-multiselect"></i>
      <h2>Última Avaliação</h2>
      <p class="info">{{ ultimaAvaliacao.nome }}</p>
      <p class="text">Data da última avaliação</p>
    </div>
  </div>
  </div>
</template>

<style scoped>
.component{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  box-shadow: 0px 0px 50px rgba(0,0,0,0.8);
  border-radius: 30px;
  padding: 20px;
  margin: 50px 0;
  whidth: 100%;

& h1{
  text-align: center;
  margin: 20px;
  color: #6f4e37;
  font-size: 40px;
}
& .resumo{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  gap: 50px;
  & .card{
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    text-align: center;
    & i{
      font-size: 40px;
      color: #6f4e37;
      margin-bottom: 10px;
      text-shadow: 4px 4px 10px rgba(0,0,0,0.30);
    }
    & h2{
      font-size: 24px;
      margin-bottom: 10px;
    }
    & p.info{
      font-size: 30px;
      color: #f5f5f5;
      background-color: #6f4e37;
      border-radius:20px;
      padding: 5px 0;
      box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
    }
    p.text{
      font-size: 20px;
      color: #6f4e37;
    }
  }
}
}
</style>
