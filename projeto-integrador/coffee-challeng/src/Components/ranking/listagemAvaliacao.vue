<script setup>
import { computed } from 'vue'
import { calcularMedia } from '@/data/coffee.js'
import cardAvaliacao from './cardAvaliacao.vue'

const props = defineProps({
  coffees: {
    type: Array,
    required: true
  }
})

const coffeesOrdenados = computed(() => {
  return [...props.coffees].sort((a, b) => {
    return Number(calcularMedia(b)) - Number(calcularMedia(a))
  })
})
</script>

<template>
  <div class="avaliacao-grid">
    <cardAvaliacao
      v-for="coffee in coffeesOrdenados"
      :key="coffee.id"
      :coffee="coffee"
    />
  </div>
</template>
<style scoped>
.avaliacao-grid{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>