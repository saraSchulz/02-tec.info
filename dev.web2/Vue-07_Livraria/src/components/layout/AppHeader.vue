<script setup>
defineEmits(['open-cart'])
</script>
<template>
  <header>
    <nav>
      <h1 class="logo-container">
        <RouterLink to="/">
          <img src="/logo.png" alt="Logo da Livraria" class="logo">
        </RouterLink>
      </h1>

      <div class="search-wrapper">
        <input type="text" class="search" placeholder="Pesquisar..." />
      </div>

      <ul class="nav-links">
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
        <li class="floating-navigation" @click="$emit('open-cart')">
          <span class="mdi mdi-cart-outline"></span>
        </li>
        <li>| <span class="mdi mdi-star"></span> |</li>
        <li>
          <span class="mdi mdi-account"></span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px 20px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);

  & .logo-container {
    margin: 0;

    & img {
      width: 120px;
      display: block;
    }
  }

  & .search-wrapper {
    position: relative;
    flex: 1;
    max-width: 400px;
    min-width: 180px;
  }

  & input {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1rem;
    border: 0;
    background-color: rgba(184, 140, 78, 0.5);
    padding: 5px;
  }

  & input::placeholder {
    color: #372010;
  }

  & ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

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
    margin: 0 10px;

    & li {
      color: #6F363A;
      font-size: 1.3rem;
      white-space: nowrap;
    }
  }
}

/* TABLETS */
@media (max-width: 900px) {
  header nav {
    gap: 15px;
    padding: 10px 15px;

    & .logo-container img {
      width: 100px;
    }

    & .search-wrapper {
      max-width: 300px;
    }

    & .nav-links li {
      margin: 0 6px;
      font-size: 14px;
    }

    & .icons {
      margin: 0 5px;
    }
  }
}

/* CELULARES */
@media (max-width: 600px) {
  header nav {
    justify-content: space-between;
    gap: 12px;
    padding: 10px;

    & .logo-container img {
      width: 85px;
    }

    /* Pesquisa ocupa uma linha inteira */
    & .search-wrapper {
      order: 3;
      flex: 1 0 100%;
      max-width: none;
    }

    /* Links ficam em uma linha abaixo da pesquisa */
    & .nav-links {
      order: 4;
      flex: 1 0 100%;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;

      & li {
        margin: 0;
        font-size: 13px;
      }
    }

    /* Ícones permanecem ao lado da logo */
    & .icons {
      order: 2;
      gap: 10px;
      margin: 0;

      & li {
        margin: 0;
        font-size: 1.15rem;
      }
    }
  }
}

/* RESPONSIVIDADE - ajustes finais */
header { width: 100%; }
header nav { box-sizing: border-box; }
header nav .search-wrapper { min-width: 0; }
header nav .icons { flex-shrink: 0; }
@media (max-width: 600px) {
  header nav .search-wrapper { min-width: 100%; }
  header nav .nav-links { width: 100%; row-gap: 8px; }
  header nav .icons { flex-wrap: nowrap; }
}
@media (max-width: 380px) {
  header nav .nav-links { column-gap: 6px; }
  header nav .nav-links li { font-size: 12px; }
  header nav .icons li { font-size: 1rem; }
}

</style>
