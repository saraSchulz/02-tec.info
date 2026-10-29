<template>
  <section class="banner">
    <div class="fundo">
    <h2>Melhores Filmes</h2>
    </div>
  </section>
</template>
<style scoped>
.banner{
  min-height: 100vh;
  width: 100%;
  background: url("/public/banner.png") no-repeat center center/cover;
  position: relative;
  box-shadow: 0 0 75px rgb(146, 146, 146);
}
.fundo{
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
}
h2{
  /*Posição*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 5rem;
  color: #F81F3E;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.897);
}
</style>
