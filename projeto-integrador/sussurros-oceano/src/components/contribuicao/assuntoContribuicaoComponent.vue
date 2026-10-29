<script setup>
import { ref } from "vue";

const topicoSelecionado = ref(null);
const topicoAnterior = ref(null);
const animando = ref(false);

const topicos = [
  {
    title: "Redusa o uso de plasticos ",
    text1: "Substitua descartáveis por sacolas reutilizáveis, garrafas térmicas e talheres pessoais.",
    text2: "Prefira produtos a granel e embalagens retornáveis.",
    text3: "Ajuda a evitar microplásticos que poluem rios e oceanos.",
    mdi : "mdi mdi-cancel"
  },
  {
    title: "Recicle e Reutilize",
    text1: "Apoie a coleta seletiva e programas de retorno de embalagens.",
    text2: "Transforme resíduos em novos produtos.",
    text3: "Fortalece a economia circular e gera empregos.",
    mdi : "mdi mdi-recycle-variant"
  },
  {
    title: "Participe de Limpezas",
    text1: "Mutirões em praias e rios removem plásticos e redes de pesca.",
    text2: "Promove educação ambiental e engajamento comunitário.",
    text3: "Atitudes simples com impacto direto na vida marinha.",
    mdi : "mdi mdi-beach"
  },
  {
    title: "Educação e Conscientização",
    text1: "Escolas: ensino sobre reciclagem e preservação.",
    text2: "Comunidades: hortas urbanas, coleta seletiva, campanhas.",
    text3: "Empresas: incentivo a práticas sustentáveis.",
    mdi : "mdi mdi-book-open-page-variant"
  },
  {
    title: "Políticas Públicas",
    text1: "Leis que limitam ou proíbem descartáveis.",
    text2: "Responsabilidade das empresas sobre seus resíduos.",
    text3: "Investimento em coleta, reciclagem e proteção marinha.",
    mdi : "mdi mdi-bank-outline"
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
      <h2>Formas de ajudar</h2>
    </div>

    <div class="informacoes">
      <div class="lista">
        <ul>
          <li v-for="m in topicos" :key="m.title" @click="selecionarTopico(m)"
            :class="{ selecionado: topicoSelecionado?.title === m.title }">
            <div class="titulo-item"><i :class="m.mdi"></i>{{ m.title }}</div>


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
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 2rem;

        & li {
          font-size: 30px;
          margin: 15px 30px;
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
          background-color: rgba(0, 94, 97, 0.527);
        }

        & li.selecionado {
          background-color: #fff;
        }

        .titulo-item {
          color: #000;
          margin: 5px;
          & i{
            margin: 0 10px;
          }
        }
      }
    }

    .conteudo {
      font-size: 20px;
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
