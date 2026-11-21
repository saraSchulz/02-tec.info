<script>
</script>
<template>
  <section class="hero">
    <div class="hero-content">
      <h3 class="outlined">Livro destaque</h3>
      <h2>Memórias Póstumas de Brás Cubas </h2>
      <p>
        Narrado por um defunto autor, o romance apresenta as memórias de Brás Cubas. Com humor e sarcasmo, ele revisita sua vida e seus fracassos. A obra rompe padrões tradicionais da narrativa. Machado de Assis critica a sociedade brasileira do século XIX. Um marco do realismo nacional.
      </p>
      <button>
        <RouterLink to="/livro/1">
          Acessar página do livro
        </RouterLink>
      </button>
    </div>
    <div class="hero-image">
      <img src="/public/booksImgs/memoriasCubas.png" alt="Hero Image" />
    </div>
  </section>
</template>
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 3vw;

  & h2 {
    color: #6F363A;
    font-size: 3rem;
    font-weight: 700;
  }

  & .hero-content {
    width: 50%;
    padding-right: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    & h3.outlined {
      background-color: transparent;
      color: #6F363A;
      border: 2px solid #6F363A;
      padding: 15px 10px;
      border-radius: 5px;
      font-size: 1rem;
    }

    p {
      width: 100%;
    }

    & button {
      background-color: transparent;
      border: 2px solid #6F363A;
      color: #6F363A;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
      transition: all 0.3s ease;

      & a {
        color: #6F363A;
        text-decoration: none;
      }
    }

    & button:hover {
      background-color: #6F363A;
      color: #ede2cf;
      & a {
        color: #ede2cf;
      }
    }
  }

  & .hero-image {
    width: 50%;
    text-align: right;
    padding-right: 4vw;

    & img {
      max-width: 100%;
      height: auto;
    }
  }
}

/* RESPONSIVIDADE */
@media (max-width: 900px) {
  .hero { gap: 24px; padding: 24px 4vw; }
  .hero .hero-content { width: 55%; gap: 16px; }
  .hero h2 { font-size: 2.2rem; }
  .hero .hero-image { width: 45%; padding-right: 0; }
}
@media (max-width: 650px) {
  .hero { flex-direction: column; align-items: stretch; padding: 24px 18px; }
  .hero .hero-content { width: 100%; padding-right: 0; gap: 14px; }
  .hero .hero-content h3.outlined { padding: 10px; font-size: .9rem; }
  .hero h2 { font-size: 1.8rem; line-height: 1.2; margin: 0; }
  .hero .hero-content p { font-size: 1rem; line-height: 1.6; margin: 0; }
  .hero .hero-content button { max-width: 100%; }
  .hero .hero-image { width: 100%; text-align: center; padding: 0; }
  .hero .hero-image img { width: min(100%, 420px); }
}
@media (max-width: 380px) {
  .hero { padding: 20px 14px; }
  .hero h2 { font-size: 1.55rem; }
  .hero .hero-content button { width: 100%; }
}

</style>
