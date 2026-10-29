<template>
  <main class="not-found">
    <h1>404</h1>
    <h2>Página não encontrada</h2>
    <p>A página que você tentou acessar não existe.</p>
    <RouterLink to="/"> <i class="mdi mdi-home"></i> Voltar para a Home </RouterLink>
  </main>
</template>

<style scoped>
.not-found{
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  text-align: center;
}

h1{
  font-size: 120px;
  margin: 0;
  color: #2D1F1A;
}

h2{
  color: #1A1A1A;
  font-size: 40px;
  margin: 10px;
}
p{
  color: #5C5C5C;
}

a{
  text-decoration: none;
  padding: 10px 20px;
  background: #6B4A2F;
  color: #F4F1EB;
  border-radius: 20px;
  font-size: 20px;
  & i{
    margin: 2px;
  }
}
</style>
