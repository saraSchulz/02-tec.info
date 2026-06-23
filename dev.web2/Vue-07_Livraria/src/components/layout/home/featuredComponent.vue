<script>
</script>
<template>
  <section class="featured">
    <div>
      <span class="mdi mdi-book-open-page-variant"></span>
      <h2>Mais vendidos</h2>
    </div>
    <div>
      <span class="mdi mdi-truck-fast-outline"></span>
      <h2>Frete Grátis</h2>
    </div>
    <div>
      <span class="mdi mdi-package-variant-closed"></span>
      <h2>Nosso estoque</h2>
    </div>
  </section>

</template>
<style scoped>
.featured {
  margin: 40px 0;
  display: flex;
  padding: 3vh 8vw;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);

  & div {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;
    padding: 20px;

    & span {
      font-size: 40px;
      color: #6F363A;
    }

    & h2 {
      font-size: 30px;
      font-weight: 700;
      color: #6F363A;
    }
  }

  & article:nth-child(2) {
    border-left: 1px solid #6F363A;
    border-right: 1px solid #6F363A;
  }
}
</style>
