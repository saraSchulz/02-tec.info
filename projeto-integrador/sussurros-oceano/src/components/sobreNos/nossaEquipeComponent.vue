
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

    <div
      class="equipe"
      :class="{ 'membro-aberto': membroSelecionado }"
    >

      <!-- Lista de membros -->
      <div class="lista" :class="{ ativo: membroSelecionado }">

        <h3>Membros:</h3>

        <ul>
          <li
            v-for="m in membros"
            :key="m.nome"
            @click="selecionarMembro(m)"
            :class="{
              selecionado: membroSelecionado?.nome === m.nome
            }"
          >
            {{ m.nome }}

            <span
              v-if="membroSelecionado?.nome === m.nome"
              class="mdi mdi-menu-right"
            ></span>
          </li>
        </ul>

      </div>

      <!-- Detalhes do integrante -->
      <div class="detalhes" v-if="membroSelecionado">

        <img
          :src="membroSelecionado.foto"
          :alt="membroSelecionado.nome"
        />

        <h3>{{ membroSelecionado.nome }}</h3>

        <p>
          <b>Email:</b>
          {{ membroSelecionado.email }}
        </p>

        <p>
          <b>Turma:</b>
          {{ membroSelecionado.turma }}
        </p>

        <p v-if="membroSelecionado.github">
          <b>Github:</b>
          {{ membroSelecionado.github }}
        </p>

        <button @click="voltar">
          <i class="mdi mdi-menu-left"></i>
          Voltar
        </button>

      </div>

    </div>

    <div class="space"></div>

  </section>
</template>

<style scoped>
/* ====================================
              GERAL
===================================== */

.nossoEquipe {
  width: 100%;
  align-items: center;
}

.titulo {
  margin: 2vw 0;
  display: flex;
  justify-content: center;
  font-size: 50px;
}

.titulo h2 {
  color: #000;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
}

/* ====================================
              EQUIPE
===================================== */

.equipe {
  min-height: 90vh;
  width: 100%;
  background: url("/fundo.png") no-repeat center center / cover;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  gap: 5vw;
  overflow: hidden;
}

/* ====================================
              LISTA
===================================== */

.lista {
  flex: 1;
  transform: translateX(0);
  transition: transform 1s ease;
  text-align: center;
}

.lista h3 {
  font-size: 50px;
  color: #000;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
}

.lista ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0;
  list-style: none;
}

.lista ul li {
  color: #000;
  font-size: 30px;
  margin: 15px;
  text-align: center;
  cursor: pointer;
  padding: 5px 70px;
  border-radius: 50px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.lista ul li:hover {
  transform: scale(1.1);
  background-color: rgba(144, 224, 239, 0.3);
}

.lista ul li.selecionado {
  transform: scale(1.15);
  background-color: rgba(144, 224, 239, 0.3);
}

.lista ul li .mdi {
  margin-left: 10px;
  color: #000;
  vertical-align: middle;
}

.lista.ativo {
  transform: translateX(-10%);
}

/* ====================================
              DETALHES
===================================== */

.detalhes {
  flex: 1;
  opacity: 1;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.detalhes img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.8);
}

.detalhes h3 {
  font-size: 30px;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.detalhes p {
  color: #000;
  font-size: 20px;
  text-align: center;
  overflow-wrap: anywhere;
}

.detalhes button {
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

.detalhes button:hover {
  transform: scale(1.1);
  background-color: rgba(144, 224, 239, 0.3);
}

.space {
  padding: 100px;
}

/* ====================================
              TABLETS
===================================== */

@media (max-width: 1100px) and (min-width: 768px) {

  .titulo {
    font-size: 30px;
  }

  .equipe {
    justify-content: center;
    align-items: center;
    gap: 0;
    min-height: auto;
  }

  .lista,
  .detalhes {
    margin: 7vh 0;
  }

  .lista {
    flex: 1;
  }

  .lista h3 {
    font-size: 35px;
  }

  .lista ul li {
    font-size: 20px;
    padding: 5px 25px;
  }

  .detalhes {
    flex: 1;
  }

}

/* ====================================
              CELULARES
===================================== */

@media (max-width: 767px) {

  .titulo {
    font-size: 20px;
    margin: 30px 0;
  }

  .equipe {
    min-height: 75vh;
    justify-content: center;
    align-items: center;
    gap: 0;
    padding: 30px 15px;
    box-sizing: border-box;
  }

  /* Lista de membros */

  .lista {
    width: 100%;
    flex: none;
    margin: 30px 0;
    transform: none;
  }

  .lista h3 {
    font-size: 30px;
  }

  .lista ul {
    width: 100%;
  }

  .lista ul li {
    font-size: 18px;
    padding: 10px 20px;
    margin: 10px;
  }

  /* Esconde a lista quando um integrante é selecionado */

  .equipe.membro-aberto .lista {
    display: none;
  }

  /* Mostra somente os detalhes */

  .detalhes {
    width: 100%;
    flex: none;
    margin: 20px 0;
    padding: 15px;
    box-sizing: border-box;
    animation: aparecer 0.4s ease;
  }

  .detalhes img {
    width: 160px;
    height: 160px;
  }

  .detalhes h3 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  .detalhes p {
    font-size: 16px;
    max-width: 100%;
  }

  .detalhes button {
    font-size: 18px;
    margin: 15px;
    padding: 10px 25px;
  }

  .space {
    padding: 40px;
  }

}

/* Animação dos detalhes */

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
