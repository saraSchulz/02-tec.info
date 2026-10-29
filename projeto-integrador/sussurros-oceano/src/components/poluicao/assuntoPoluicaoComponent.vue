<script setup>
import { ref } from "vue";

const topicoSelecionado = ref(null);
const topicoAnterior = ref(null);
const animando = ref(false);

const topicos = [
  {
    title: "Impacto do Plástico nos Oceanos ",
    text1: "Impacto do Plástico nos Oceanos Milhões de toneladas chegam ao mar todos os anos. Animais como tartarugas, aves e mamíferos sofrem ferimentos e até a morte.",
    text2: "Resíduos viram microplásticos, entram na cadeia alimentar e afetam humanos.",
    text3: "Essa poluição ameaça a biodiversidade, degrada habitats e gera custos de limpeza.",
  },
  {
    title: "Derrammento de Petróleo",
    text1: "Bloqueia a luz solar e prejudica a fotossíntese.",
    text2: "Causa a morte de aves e mamíferos marinhos.",
    text3: "Polui a cadeia alimentar e afeta comunidades pesqueiras e turísticas. Os custos de limpeza e indenizações são altíssimos.",
  },
  {
    title: "Poluição Química e Metais pesados",
    text1: " Resíduos de indústrias, agricultura e esgoto contaminam os mares.",
    text2: "Metais pesados acumulam-se nos animais, reduzindo fertilidade e aumentando a mortalidade.",
    text3: "O consumo de peixes contaminados gera doenças neurológicas em humanos. A eutrofização causa a morte em massa de peixes.",
  },
  {
    title: "Aquecimento global e Acidificação",
    text1: " Aquecimento da água provoca o branqueamento dos corais. Altera a migração de peixes e mamíferos, prejudicando a pesca.",
    text2: "O derretimento das calotas eleva o nível do mar.",
    text3: "A acidificação ameaça organismos calcários e impacta a produção de oxigênio.",
  },
  {
    title: "Perda de Biodiversidade",
    text1: "Nos últimos 40 anos, a biodiversidade marinha caiu cerca de 50%.",
    text2: "Populações de peixes reduziram até 75%",
    text3: "  Recifes de corais perderam 34% de sua extensão. É urgente proteger ecossistemas e reduzir poluição e emissões.",
  },
];

function selecionarTopico(topico) {
  if (animando.value) return;

  if (topicoSelecionado.value?.title === topico.title) {
    topicoSelecionado.value = null;
    return;
  }

  if (topicoSelecionado.value) {
    animando.value = true;
    topicoAnterior.value = topicoSelecionado.value;
    topicoSelecionado.value = null;

    setTimeout(() => {
      topicoAnterior.value = null;
      topicoSelecionado.value = topico;
      animando.value = false;
    }, 400);
  } else {
    topicoSelecionado.value = topico;
  }
}
</script>
<template>
  <section class="assuntoFauna">
    <div class="titulo">
      <h2>Saiba mais sobre:</h2>
    </div>

    <div class="informacoes">
      <div class="lista">
        <ul>
          <li v-for="m in topicos" :key="m.title" @click="selecionarTopico(m)"
            :class="{ selecionado: topicoSelecionado?.title === m.title }">
            <div class="titulo-item">{{ m.title }}</div>


            <transition name="slide-fade">
              <div v-if="topicoSelecionado?.title === m.title" class="conteudo">
                <p>{{ m.text1 }}</p>
                <p>{{ m.text2 }}</p>
                <p>{{ m.text3 }}</p>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
    <div class="space">
    </div>
  </section>
</template>
<style scoped>
.assuntoFauna {
  width: 100%;
  align-items: center;

  & .titulo {
    margin: 2vw 0;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    font-size: 50px;

    & h2 {
      color: #000000;
      text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
    }
  }

  & .informacoes {
    min-height: 80vh;
    background: #fff;
    box-shadow: 10px 10px 75px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    & .lista {
      margin: 10px;

      & h3 {
        font-size: 50px;
        color: #000000;
        text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
      }

      & ul {
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin: 0 2rem;

        & li {
          font-size: 30px;
          margin: 15px 0;
          padding: 15px 30px;
          border-radius: 20px;
          background-color: rgba(144, 224, 239, 0.3);
          cursor: pointer;
          transition: all 0.4s ease;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);

        }

        & li:hover {
          transform: scale(1.02);
          background-color: rgba(0, 52, 80, 0.2);
        }

        & li.selecionado {
          background-color: #fff;
        }

        .titulo-item {
          color: #000;
        }
      }
    }

    .conteudo {
      font-size: 18px;
      color: #000;
      text-align: center;

      & p {
        color: #000;
      }
    }

  }

  & .space {
    padding: 100px;
  }
}

/* ====== Transição de slide vertical ====== */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
  /* 👈 esse tempo é o mesmo do setTimeout */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}
</style>
