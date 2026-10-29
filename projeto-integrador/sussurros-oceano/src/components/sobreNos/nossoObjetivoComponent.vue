<script setup>
</script>
<template>
  <section class="nossoObjetivo">
    <div class="titulo">
    <h2>
      Nosso Objetivo
    </h2>
    </div>
    <div class="texto">
      <p class="img">
        <img src="/estrela-mar-com-pedacos-de-plastico.png" alt="estrala-mar-img">
      </p>
      <p class="text">
        O objetivo deste trabalho é conscientizar sobre a importância da fauna marinha e os impactos da poluição nos oceanos, destacando ações que podem ser adotadas para reduzir os danos ambientais e promover a preservação dos ecossistemas marinhos.
      </p>
    </div>
  </section>
</template>
<style scoped>
.nossoObjetivo {
  width: 100%;
  align-items: center;
  & .titulo {
    margin: 2vw 0;
    display: flex;
    justify-content: center;
    font-size: 50px;
    & h2{
      color: #000000;
      text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
    }
  }

  & .texto {
    min-height: 90vh;
  width: 100%;
    background: url('/public/fundo.png') no-repeat center center/cover;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5vw;


    & .text {
      width: 50%;
      margin: 7vh 15vh;
      color: #000000;
      font-size: 25px;
      text-align: center;
      text-shadow: 0 4px 7px rgba(0,0,0,0.5);
    }

    & .img {
      width: 50%;
      margin: 7vh 15vh;
      & img{
        border-radius: 40px;
        box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
      }

    }

  }

}
</style>
