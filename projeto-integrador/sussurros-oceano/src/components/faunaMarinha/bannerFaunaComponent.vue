<script setup>
</script>
<template>
  <section class="banner">
    <video autoplay muted loop playsinline src="/videos/fundo-fauna.mp4"></video>
    <H2>
      Fauna marinha e a vida humana ...
    </H2>
  </section>
</template>
<style scoped>
.banner{
  min-height: 100vh;
  width: 100%;
  position: relative;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
  text-align: center;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
h2{
  /*Posição*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*Decoração*/
  font-size: 4rem;
  color: white;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);

}
</style>
