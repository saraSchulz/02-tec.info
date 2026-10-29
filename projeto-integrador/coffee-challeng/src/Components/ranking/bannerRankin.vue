<script setup>
</script>
<template>
  <div class="titulo">
    <h2>Avaliações de Cafés</h2>

    <h1>
      <router-link to="/">
        <img src="/public/logo.png" alt="logo.png">

      </router-link>
    </h1>
    <p>Confira as avaliações realizadas pelos nossos avaliadores.</p>
  </div>
</template>
<style scoped>
.titulo {
  background: linear-gradient(180deg, #DCC8B0, #6B4A2F, #DCC8B0);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    color: #DCC8B0;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    margin: 20px;

  }

  & h1 {
    margin: 10px 0;
    cursor: pointer;
    font-size: 25px;

    & img {
      width: 100px;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
    }
  }

  & p {
    font-size: 20px;
    color: #6B4A2F;
  }
}
</style>