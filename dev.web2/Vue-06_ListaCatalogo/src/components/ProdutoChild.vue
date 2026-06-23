<script setup>
defineProps(['desc', 'status', 'id', 'item'])
defineEmits(['excluir', 'alternar', 'editar'])
import ButtonChild from './ButtonChild.vue'
</script>

<template>
  <li @click="$emit('alternar', id)" :class="{ concluida: status === 'concluida' }">
    {{ desc }} - ({{ status }})
    <ButtonChild class="excluir" @clique="$emit('excluir', id)"> Excluir </ButtonChild>

    <ButtonChild class="editar" @clique="$emit('editar', id)"> Editar </ButtonChild>
  </li>
</template>

<style scoped>

li {
  font-size: 16px;
  cursor: pointer;
  margin: 2px 0;
  font-weight: bold;
}
</style>
