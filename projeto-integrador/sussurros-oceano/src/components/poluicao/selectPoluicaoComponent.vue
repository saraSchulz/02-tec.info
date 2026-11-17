<script setup>
</script>
<template>
  <section class="select">
    <ul>
      <li>
        <routerLink to="/Fauna-Marinha">
          <i class="mdi mdi-jellyfish"></i>
          Fauna Marinha
        </routerLink>
      </li>
      <li>
        <RouterLink to="/">
          <i class="mdi mdi-home"></i>
          Home
        </RouterLink>
      </li>
      <li>
        <routerLink to="/contribuicao">
          <i class="mdi mdi-recycle"></i>
          Contribuir
        </routerLink>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.select {
  width: 100%;
  padding: 80px 40px;

  & ul {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    padding: 1rem;

    & li {
      font-size: 2rem;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      color: #000000;

      & a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
}
@media (max-width: 767px) and (min-width: 360px) {
  section.select {
    padding: 20px 10px;

    & ul {
      text-align: center;
      gap: 1rem;
      padding: 0.5rem;

      & li {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
