<script setup>
defineEmits(['open-cart'])
</script>

<template>
  <header>
    <nav>
      <h1>
        <RouterLink to="/">
          <img src="/logo.png" alt="Logo" class="logo">
        </RouterLink>
      </h1>
      <div class="search-wrapper">
        <input type="text" class="search" placeholder="Pesquisar..." />
      </div>
      <ul>
        <li>Segurança</li>
        <li>
          <RouterLink to="/equipe">
            Sobre nós
          </RouterLink>

        </li>
        <li>Envio</li>
        <li>Compras</li>
      </ul>
      <ul class="icons">
        <div>

        </div>
        <li class="floating-navigation" @click="$emit('open-cart')">
          <span class="mdi mdi-cart-outline"></span>
        </li>
        <li> | <span class="mdi mdi-star"></span> | </li>
        <li><span class="mdi mdi-account"></span></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);

  & h1 {
    & img {
      width: 120px;
    }
  }

  & input {
    width: 400px;
    height: 30px;
    border-radius: 5px;
    font-size: 1rem;
    border: 0;
    background-color: rgba(184, 140, 78, 0.5);
    padding: 5px;
  }

  & input::placeholder {
    color: #372010;
    margin: 0 5px;
  }

  & ul {
    display: flex;
    list-style: none;

    & li {
      margin: 0 10px;
      font-size: 15px;
      color: #372010;
      cursor: pointer;

      & a {
        color: #372010;
        text-decoration: none;
      }
    }
  }

  & .icons {
    margin: 0 25px;

    & li {
      color: #6F363A;
      font-size: 1.3rem;
    }
  }

  & .search-wrapper {
    position: relative;
  }

  & .search-wrapper::before {
    font-size: 1.2rem;

    right: 0.75rem;
    top: 50%;
  }
}
</style>
