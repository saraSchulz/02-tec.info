<script setup>
</script>
<template>
  <section class="select">
    <ul>
      <li>
        <routerLink to="/poluicao">
          <i class="mdi mdi-weather-dust"></i>
          Poluição
        </routerLink>
      </li>
      <li>
        <RouterLink to="/">
          <i class="mdi mdi-home"></i>
          Home
        </RouterLink>
      </li>
      <li>
        <routerLink to="/Contribuicao">
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
</style>
