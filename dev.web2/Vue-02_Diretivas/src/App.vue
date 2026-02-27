<script setup>
import {ref} from 'vue'
const text = ref('');

//v-if (renderização condicional), v-for (listagem de elementos) e v-model (vinculação bidirecional de dados)
</script>
<template>
    <div class="container">
        <p>Diretivas-vue</p>
        <input type="text" v-model="text">
        <p>O texto é {{ text }} ( Qauntidade de Cacacteres: {{ text.length }})</p>
    </div>
</template>

<style scoped>
</style>
