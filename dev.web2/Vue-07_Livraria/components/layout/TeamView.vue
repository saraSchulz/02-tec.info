<script setup>
import appHeader from './AppHeader.vue'
import { ref } from "vue";

const membroSelecionado = ref(null);

const membros = [
  {
    nome: "Bianca Holanda De Jesus",
    turma: "2info2",
    github: "Bianca161",
  },
  {
    nome: "Mizael Estevam ",
    turma: "2info2",
    github: "mizaelestevam",
  },
  {
    nome: "Sara Schulz",
    turma: "2info2",
    github: "saraSchulz",
  },
];

function selecionarMembro(membro) {
  membroSelecionado.value = membro;
}

function voltar() {
  membroSelecionado.value = null;
}
</script>
<template>
  <appHeader />
  <section class="nossoEquipe">
    <div class="titulo">
      <h2>Nossa Equipe</h2>
    </div>
    <div class="equipe">
      <div class="lista" :class="{ ativo: membroSelecionado }">
        <h3>Membros:</h3>
        <ul>
          <li v-for="m in membros" :key="m.nome" @click="selecionarMembro(m)"
            :class="{ selecionado: membroSelecionado?.nome === m.nome }">
            {{ m.nome }}
            <span v-if="membroSelecionado?.nome === m.nome" class="mdi mdi-menu-right"></span>
          </li>
        </ul>
      </div>
      <div class="detalhes" v-if="membroSelecionado">
        <h3>{{ membroSelecionado.nome }}</h3>
        <p><b>Turma:</b> {{ membroSelecionado.turma }}</p>
        <p><i class="mdi mdi-github"></i> {{ membroSelecionado.github }} </p>
        <button @click="voltar"> <i class="mdi mdi-menu-left"></i>Voltar</button>
      </div>
    </div>
    <div class="space">
      <RouterLink to="/">
        <h1>
          <img src="/logo.png" alt="Logo" class="logo">
        </h1>
        para voltar para a vitrine
      </RouterLink>
    </div>
  </section>
</template>
<style scoped>
.nossoEquipe {
  width: 100%;
  align-items: center;

  & .titulo {
    margin: 2vw 0;
    display: flex;
    justify-content: center;
    font-size: 30px;

    & h2 {
      color: #6F363A;
    }
  }

  & .equipe {
    width: 100%;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    gap: 5vw;
    overflow: hidden;

    & .lista {
      flex: 1;
      transform: translateX(0);
      transition: transform 1s ease;
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;


      & h3 {
        font-size: 25px;
        color: #6F363A;
        text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
      }

      & ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        list-style: none;

        & li {
          color: #6F363A;
          font-size: 20px;
          margin: 15px;
          text-align: center;
          cursor: pointer;
          padding: 5px 70px;
          border-radius: 50px;
          transition: transform 0.3s ease, background-color 0.3s ease;

        }

        & li:hover {
          transform: scale(1.1);
          background-color: rgba(184, 144, 78, 0.5);
        }

        & li.selecionado {
          transform: scale(1.15);
          background-color: rgba(184, 144, 78, 0.5);

        }

        & li .mdi {
          margin-left: 10px;

          color: #6F363A;
          vertical-align: middle;
        }
      }
    }

    & .lista.ativo {
      transform: translateX(-10%);
    }

    & .detalhes {
      flex: 1;
      opacity: 1;
      transition: opacity 0.5s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #6F363A;

      & button {
        background-color: transparent;
        border: none;
        font-size: 15px;
        cursor: pointer;
        margin: 20px;
        transition: transform 0.3s ease, background-color 0.3s ease;
        text-align: center;
        padding: 5px 20px;
        border-radius: 50px;

      }

      & button:hover {
        transform: scale(1.1);
        background-color: rgba(184, 144, 78, 0.5);
      }

      & h3 {
        font-size: 30px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
      }

      & p {
        color: #000;
        font-size: 20px;
        text-align: center;
      }
    }
  }

  & .space {
    margin: 40px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;

    a {
      text-decoration: none;
      color: #6F363A;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      & h1 {
        font-size: 1.5rem;
        color: #6F363A;
        display: flex;
        align-items: center;
        gap: 10px;

        & .logo {
          width: 150px;
          height: 100px;
        }
      }

    }
  }
}

/* RESPONSIVIDADE */
@media (max-width: 850px) {
  .nossoEquipe .titulo { font-size: 26px; margin: 24px 0; }
  .nossoEquipe .equipe { gap: 24px; padding: 18px 12px; box-sizing: border-box; }
  .nossoEquipe .lista ul li { padding: 8px 24px; font-size: 1.05rem; }
  .nossoEquipe .detalhes h3 { font-size: 1.7rem; }
  .nossoEquipe .detalhes p { font-size: 1.05rem; overflow-wrap: anywhere; }
}
@media (max-width: 600px) {
  .nossoEquipe .titulo { font-size: 22px; }
  .nossoEquipe .equipe { min-height: 55vh; flex-direction: column; gap: 0; padding: 20px 12px; }
  .nossoEquipe .lista { width: 100%; flex: 1 1 auto; transform: none !important; }
  .nossoEquipe .lista.ativo { display: none; }
  .nossoEquipe .lista h3 { font-size: 1.3rem; }
  .nossoEquipe .lista ul { width: 100%; padding: 0; }
  .nossoEquipe .lista ul li { width: min(100%, 340px); box-sizing: border-box; margin: 8px 0; padding: 10px 14px; font-size: 1rem; }
  .nossoEquipe .lista ul li.selecionado { transform: none; }
  .nossoEquipe .detalhes { width: 100%; flex: 1 1 auto; padding: 16px 8px; box-sizing: border-box; }
  .nossoEquipe .detalhes h3 { font-size: 1.5rem; margin-bottom: 12px; overflow-wrap: anywhere; }
  .nossoEquipe .detalhes p { font-size: 1rem; }
  .nossoEquipe .detalhes button { margin: 12px 0; }
  .nossoEquipe .space { margin: 28px 12px; }
  .nossoEquipe .space a { font-size: 1rem; text-align: center; }
  .nossoEquipe .space a h1 .logo { width: 120px; height: auto; }
}

</style>
