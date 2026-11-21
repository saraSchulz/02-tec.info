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

/* RESPONSIVIDADE */
@media (max-width: 900px) {
  .featured { padding: 2vh 3vw; }
  .featured div { padding: 14px 10px; gap: 8px; }
  .featured div span { font-size: 32px; }
  .featured div h2 { font-size: 1.35rem; }
}
@media (max-width: 650px) {
  .featured { margin: 24px 0; padding: 12px; flex-direction: column; }
  .featured div { justify-content: flex-start; padding: 12px 16px; }
  .featured div span { font-size: 28px; }
  .featured div h2 { font-size: 1.15rem; margin: 0; }
  .featured div:nth-child(2) { border-left: 0; border-right: 0; border-top: 1px solid #6F363A; border-bottom: 1px solid #6F363A; }
}

</style>
