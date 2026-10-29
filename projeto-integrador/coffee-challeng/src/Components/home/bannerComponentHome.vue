<script setup>
</script>
<template>
  <section class="bannerhome">
  <div class="left">
    <p> Bem-vindo ao</p>
    <h2>Coffee Quality Challenge 2026</h2>
    <p>Avalie, compare e descubra os melhores cafés especiais</p>

    <div class="btns">
      <button>
         <router-link to="/avaliacoes"> <i class="mdi mdi-pencil"></i> Fazer Avalizações </router-link>
      </button>
      <button>
        <router-link to="/ranking"> <i class="mdi mdi-star"></i>Ver Ranking</router-link>
      </button>
    </div>

  </div>
  <div class="right">
    <h1>
      <img src="/public/logo.png" alt="logo">
    </h1>
  </div>
  </section>
</template>
<style scoped>
.bannerhome{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & .left{
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
    margin: 50px 10%;
    & p{
      font-size: 40px;
      margin: 10px 30px;
    }
    & h2{
      font-size: 60px;
      margin: 10px 30px;
    }
    & .btns{
      display: flex;
      margin: 10px 30px;
      & button{
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #6f4e37;
        color: white;
        border: none;
        cursor: pointer;
        & a{
          text-decoration: none;
          color: white;
          font-size: 20px;
          & i{
            margin-right: 5px;
          }
        }
      }
    }
  }
  & .right{
    width: 50%;
    margin: 10px;
    align-items: right;
    & h1{
      & img{
        width: 50%;
        height: auto;
      }
    }
  }
}

</style>
