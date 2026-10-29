<script setup>
</script>
<template>
  <section class="maisSobre">
    <p class="texto">
      A poluição e as atividades humanas prejudicam os ecossistemas marinhos. Plásticos, petróleo e produtos químicos ameaçam espécies e a vida das pessoas. É preciso conscientizar e preservar os oceanos.
    </p>
    <p class="img">
      <img src="/tartaruga.png" alt="img-tartaruga">
    </p>
  </section>
</template>
<style scoped>
.maisSobre {
  width: 100%;
  padding: 80px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;

  & .texto {
    width: 50%;
    margin: 7vh 15vh;
    color: #000000;
    font-size: 25px;
    text-align: left;
  }

  & .img {
    width: 50%;
    margin: 7vh 15vh;
    & img{
      border-radius: 70px;
    }

  }

}
</style>
