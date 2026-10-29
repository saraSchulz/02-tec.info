<script setup>
</script>
<template>
  <header>
    <h1>
      <router-link to="/">
        <img src="/public/logo.png" alt="logo.png">

      </router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/"> <i class="mdi mdi-home"></i> Home</router-link>
        </li>
        <li>
          <router-link to="/avaliacoes"> <i class="mdi mdi-pencil"></i> Avaliações </router-link>
        </li>
        <li>
          <router-link to="/ranking"> <i class="mdi mdi-star"></i> Ranking</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f1ebbb;
  margin: 0;
  width: 100%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

  position: sticky;
  top: 0;
  z-index: 1000;

  & h1 {
    margin: 20px 50px;
    cursor: pointer;

    & img {
      width: 100px;
      height: auto;
      border-radius: 50%;
    }

    & img:hover {
      transform: scale(1.1);
      transition: all ease 0.7s;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    }
  }

  & ul {
    display: flex;
    list-style: none;
    margin: 0 20px;
    padding: 0;

    & li {
      cursor: pointer;
      margin: 10px 25px;
      font-size: 20px;
      transition: all ease.5s;

      & a {
        text-decoration: none;
        color: #6B4A2F;
        padding: 5px 10px;
        border-radius: 20px;
        transition: all ease.5s;
      }

      & a.router-link-exact-active {
        background: #6B4A2F;
        color: #F4F1EB;
        padding: 5px 10px;
      }
    }

    & a:hover {
      background-color: #DCC8B0;
      scale: 1.05;
      color: #1A1A1A;

    }
  }
}
</style>
