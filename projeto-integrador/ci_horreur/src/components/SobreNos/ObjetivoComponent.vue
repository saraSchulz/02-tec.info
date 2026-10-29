<script setup>
</script>
<template>
  <section class="objetivo">
    <div class="titulo">
    <h2>Nosso Objetivo</h2>
    </div>
    <div class="texto">
      <p>
        O objetivo do Ci’horreur é fornecer uma plataforma especializada em filmes de terror, organizada para facilitar a descoberta de novas obras, acompanhar lançamentos e oferecer informações acessíveis e confiáveis ao público interessado no gênero.
      </p>
    </div>
    <hr/>
  </section>
</template>
<style scoped>
/*====================================
            OBJETIVO
=====================================*/
.objetivo {
  width: 100%;
  background: linear-gradient(to bottom, #191919 30%, #60000E 100%);
  padding: 2vw 3rem;
  margin: 0;
  & .titulo{
    text-align: right;
    margin: 2vw 10vw;
    color: #ffffff;
    font-size: 50px;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
  }
  & .texto{
  width: 75%;
  margin: 4rem 0;
  & p{
    font-size: 35px;
    margin: 4vw 12vw;
    text-align: left;
    margin: 0 30px ;
    width: 50%;
  }
  }
  & hr{
    width: 30%;
    margin: 0 auto;
  }
}
</style>
