<script setup>
import headerComponent from './components/HeaderComponent.vue';
import footerComponent from './components/FooterComponent.vue';

</script>
<template>
  <header>
    <headerComponent />
  </header>
  <main>
    <!----><RouterView />

  </main>
  <footer>
    <footerComponent />
  </footer>
</template>

<style scoped>

</style>
