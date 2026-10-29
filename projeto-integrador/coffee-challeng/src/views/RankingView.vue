
<script setup>
import { coffees } from '@/data/coffee.js'
import ListagemAvaliacoes from '@/Components/ranking/listagemAvaliacao.vue'
import bannerRankin from '@/Components/ranking/bannerRankin.vue';
</script>

<template>
      <bannerRankin/>
      
      <ListagemAvaliacoes :coffees="coffees" />
</template>