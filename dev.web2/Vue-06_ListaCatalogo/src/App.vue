<script setup>
import { RouterView } from 'vue-router';
import appHeader from './components/appHeader.vue';

</script>

<template>

  <appHeader/>
  <main>

  </main>
  <RouterView />
  
</template>

<style scoped>

main {
  padding-top: 70px;
}
</style>
