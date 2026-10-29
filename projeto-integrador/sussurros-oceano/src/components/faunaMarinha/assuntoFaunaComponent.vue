<script setup>
import { ref } from "vue";

const topicoSelecionado = ref(null);

const topicos = [
  {
    title: "Alimento e Sustento ",
    text1: "A pesca garante comida e renda para milhões.",
    text2: "Leis brasileiras regulam a pesca e incentivam práticas responsáveis.",
    text3: "Inovação: aquicultura multitrófica integrada (IMTA) → cultiva peixes, algas e mariscos juntos, reduzindo impactos.",
    video: "/videos/fauna-videos/video-pesca.mp4",
  },
  {
    title: "Medicina e Biotecnologia",
    text1: "Organismos marinhos fornecem compostos para remédios, cosméticos, biocombustíveis e novos materiais.",
    text2: "A biotecnologia marinha explora algas, bactérias e DNA oceânico.",
    text3: "No Brasil, isso integra a Economia Azul → tecnologia + preservação.",
    video: "/videos/fauna-videos/video-biotecnologia.mp4",
  },
  {
    title: "Turismo e Economia",
    text1: "Atividades como mergulho, observação de baleias e passeios náuticos atraem visitantes.",
    text2: "Gera empregos, renda e conscientização ambiental.",
    text3: "A economia do mar já representa 19% do PIB nacional.",
    video: "/videos/fauna-videos/video-turismo.mp4",
  },
  {
    title: "Serviços Ecológicos",
    text1: "O fitoplâncton produz 50% do oxigênio do planeta.",
    text2: "Manguezais e pradarias marinhas purificam a água e protegem a costa.",
    text3: "A fauna marinha mantém o equilíbrio ecológico e sustenta a cadeia alimentar.",
    video: "/videos/fauna-videos/video-ecologia.mp4",
  },
  {
    title: "Consequências do Desequilíbrio",
    text1: "A redução da fauna marinha prejudica a alimentação e renda de comunidades costeiras.",
    text2: "Impacta a qualidade da água e aumenta a vulnerabilidade a desastres climáticos.",
    text3: " A perda de biodiversidade ameaça recursos para medicamentos e tecnologias.",
    video: "/videos/fauna-videos/video-aquecimento.mp4",
  },
];

function selecionarTopico(topico) {
  topicoSelecionado.value = topico;
}

function voltar() {
  topicoSelecionado.value = null;
}
</script>
<template>
  <section class="assuntoFauna">
    <div class="titulo">
      <h2>Saiba mais sobre:</h2>
    </div>
    <div class="informacoes">
      <div class="lista" :class="{ ativo: topicoSelecionado }">
        <ul>
          <li v-for="m in topicos" :key="m.title" @click="selecionarTopico(m)"
            :class="{ selecionado: topicoSelecionado?.title === m.title }">
            {{ m.title }}

          </li>
        </ul>
      </div> <!-- Detalhes -->
      <div class="detalhes" v-if="topicoSelecionado">
        <h3>{{ topicoSelecionado.title }}</h3>
        <p>{{ topicoSelecionado.text1 }}</p>
        <p>{{ topicoSelecionado.text2 }}</p>
        <p> {{ topicoSelecionado.text3 }} </p>
        <button @click="voltar">Voltar</button>
        <p class="video">
          <video autoplay loop muted>
            <source :src="topicoSelecionado.video" type="video/mp4">
          </video>
        </p>
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
    min-height: 90vh;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    overflow: hidden;
    position: relative;

    & .lista {
      margin: 10px;

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
          transition: all 0.5s ease;

        }

        & li:hover {
          transform: scale(1.1);
          background-color: rgba(0, 52, 80, 0.3);
        }
      }
    }

    & .lista.ativo {
      display: none;
    }

    & .detalhes {
      flex: 0 0 80%;
      max-width: 800px;
      text-align: center;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      & h3 {
        font-size: 35px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 0 4px 7px rgba(0, 0, 0, 0.5);
      }

      & p {
        color: #000;
        font-size: 20px;
        text-align: center;
        margin: 10px;
      }

      & button {
        background-color: #E4F9FD;
        border: 1px solid #003450;
        font-size: 20px;
        cursor: pointer;
        margin-bottom: 20px;
        transition: all 0.8s ease;
        text-align: center;
        padding: 5px 20px;
        border-radius: 50px;
        margin: 10px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);
      }

      & button:hover {
        transform: scale(1.1);
        background-color: #003450;
        border: 1px solid #E4F9FD;
        color: #fff;
      }

      & video {
        max-width: 50%;
        border-radius: 5px;
        box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        margin-top: 20px;
      }

    }
  }

  & .space {
    padding: 100px;
  }
}
</style>
