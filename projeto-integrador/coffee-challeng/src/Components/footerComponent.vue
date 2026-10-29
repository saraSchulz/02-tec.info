<script>
</script>
<template>
  <div class="space"></div>
  <footer>
    <h1>
      <router-link to="/">
        <img src="/public/logo.png" alt="logo.png">

      </router-link>
    </h1>
    <h2>
      Coffee
    </h2>
    <p class="direitos">&copy; Alguns direitos reservados</p>
    <p class="dev">
      Desenvolvido por <span>Sara Schulz</span>
    </p>
  </footer>
</template>
<style scoped>
.space{
  padding: 50px;
  background: linear-gradient(180deg,#DCC8B0,#6B4A2F);
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6B4A2F;
  padding: 25px 0;
  width: 100%;

  & h1 {
    margin: 10px 0;
    cursor: pointer;


    & img {
      width: 150px;
      height: auto;
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }
  }
  & h2{
    font-size: 50px;
    margin: 10px 0;
    color: #855b3b;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
  & .direitos{
    margin: 10px;
    cursor: pointer;
  }
  & .dev{
    font-size: 18px;
    & span{
      font-weight: bold;
    }
  }

}
</style>
