<script setup>
</script>
<template>
  <section class="intro">
    <h2>Como cuidar do meio ambiente?</h2>
    <p>
      Cuidar do meio ambiente é uma responsabilidade coletiva e essencial para garantir um futuro sustentável. Pequenas atitudes do dia a dia, quando somadas, podem gerar grandes transformações.
    </p>
  </section>
</template>
<style scoped>
.intro{
  background-color: #fff;
  padding: 45px;
  text-align: center;
  box-shadow: 10px 10px 75px rgba(0, 0, 0, 0.8);
  & h2{
    font-size: 45px;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
    color: #000;
  }
  & p{
    font-size: 35px;
    color: #000000;
    margin: 2vw 4vw;
  }
}
@media (max-width: 767px) and (min-width: 360px) {
  .intro {
    padding: 20px;
    & h2{
      font-size: 25px;
    }
    & p{
      font-size: 18px;
      margin: 2vw 4vw;
    }
  }
}
</style>
