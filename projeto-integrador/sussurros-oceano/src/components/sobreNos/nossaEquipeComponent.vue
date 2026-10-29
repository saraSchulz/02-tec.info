<script setup>
import { ref } from "vue";

const membroSelecionado = ref(null);

const membros = [
  {
    foto: "/fotoMembros/heloisaPereira.png",
    nome: "Heloisa Pereira",
    email: "Heloisapereira1402@gmail.com",
    turma: "1agro3",
  },
  {
    foto: "/fotoMembros/lucidreyBonilla.png",
    nome: "Lucidrey Bonilla",
    email: "lucidreymaitab.ifc@gmail.com",
    turma: "2info2",
    github: "Lucidrey",
  },
  {
    foto: "/fotoMembros/robertaRibeiro.png",
    nome: "Roberta Ribeiro",
    email: "robertaapbeta2212@gmail.com",
    turma: "2info2",
    github: "roberta2212",
  },
  {
    foto: "/fotoMembros/saraSchulz.png",
    nome: "Sara Schulz",
    email: "Sara.ifc2024@gamil.com",
    turma: "2info2",
    github: "saraschulz",
  },
  {
    foto: "/fotoMembros/vitorVerplotz.png",
    nome: "Vitor Verplotz",
    email: "vitoremanuelsilvaverplotz2007@gmail.com",
    turma: "2info2",
    github: "vitorgil8",
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
  <section class="nossoEquipe">
    <div class="titulo">
      <h2>Nossa Equipe</h2>
    </div>
    <div class="equipe"> <!-- Lista de membros -->
      <div class="lista" :class="{ ativo: membroSelecionado }">
        <h3>Membros:</h3>
        <ul>
          <li v-for="m in membros" :key="m.nome" @click="selecionarMembro(m)"
            :class="{ selecionado: membroSelecionado?.nome === m.nome }">
            {{ m.nome }}
            <span v-if="membroSelecionado?.nome === m.nome" class="mdi mdi-menu-right"></span>
          </li>
        </ul>
      </div> <!-- Detalhes -->
      <div class="detalhes" v-if="membroSelecionado">
        <p><img :src="membroSelecionado.foto" :alt="membroSelecionado.nome"></p>
        <h3>{{ membroSelecionado.nome }}</h3>
        <p><b>Email:</b> {{ membroSelecionado.email }}</p>
        <p><b>Turma:</b> {{ membroSelecionado.turma }}</p>
        <p v-if="membroSelecionado.github"> <b>Github:</b> {{ membroSelecionado.github }} </p>
        <button @click="voltar"> <i class="mdi mdi-menu-left"></i>Voltar</button>
      </div>
    </div>
    <div class="space">

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
    font-size: 50px;

    & h2 {
      color: #000000;
      text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
    }
  }

  & .equipe {
    min-height: 90vh;
    width: 100%;
    background: url("/fundo.png") no-repeat center center/cover;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    gap: 5vw;
    overflow: hidden;

    & .lista {
      flex: 1;
      transform: translateX(0);
      transition: transform 1s ease;
      text-align: center;


      & h3 {
        font-size: 50px;
        color: #000000;
        text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
      }

      & ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        & li {
          color: #000000;
          font-size: 30px;
          margin: 15px;
          text-align: center;
          cursor: pointer;
          padding: 5px 70px;
          border-radius: 50px;
          transition: transform 0.3s ease, background-color 0.3s ease;

        }

        & li:hover {
          transform: scale(1.1);
          background-color: rgba(144, 224, 239, 0.3);
        }

        & li.selecionado {
          transform: scale(1.15);
          background-color: rgba(144, 224, 239, 0.3);

        }

        & li .mdi {
          margin-left: 10px;

          color: #000000;
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

      & button {
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
        margin: 20px;
        transition: transform 0.3s ease, background-color 0.3s ease;
        text-align: center;
        padding: 5px 20px;
        border-radius: 50px;

      }
      & button:hover{
          transform: scale(1.1);
          background-color: rgba(144, 224, 239, 0.3);
        }

      & img {
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.8);
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
    padding: 100px;
  }
}
</style>
