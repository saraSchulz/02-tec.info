<script setup>
import { computed } from 'vue'
import { calcularMedia } from '@/data/coffee.js'

const props = defineProps({
  coffee: {
    type: Object,
    required: true,
  },
})

const media = computed(() => calcularMedia(props.coffee))
</script>

<template>
  <div class="cardAvaliacao">

    <div class="cabecalho">
      <div>
        <h2>{{ coffee.nome }}</h2>
        <p>Produtor: {{ coffee.produtor }}</p>
      </div>

      <div class="media">
        <p>{{ media }}</p>
        <small>/ 10</small>
      </div>
    </div>
    <div class="notas">

      <p class="nota">
        Aroma
        <span>{{ coffee.aroma }}/10</span>
      </p>

      <p class="nota">
        Sabor
        <span>{{ coffee.sabor }}/10</span>
      </p>
      <p class="nota">
        Acidez
        <span>{{ coffee.acidez }}/10</span>
      </p>
      <p class="nota">
        Corpo
        <span>{{ coffee.corpo }}/10</span>
      </p>
      <p class="nota">
        Finalização
        <span>{{ coffee.finalizacao }}/10</span>
      </p>

    </div>
    <div class="observacoes">
      <h3>Observações</h3>
      <p>{{ coffee.observacoes }}</p>
    </div>
    <div class="rodape">
      <p>
        <strong>Avaliador:</strong>
        {{ coffee.avaliador }}
      </p>

      <p>
        <strong>Data:</strong>
        {{ coffee.data }}
      </p>
    </div>

  </div>
</template>
<style scoped>
.cardAvaliacao {
  width: 80%;
  background: #493426;
  margin: 25px;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.8);

  & .cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee7e0;

    & h2 {
      margin: 0 0 6px;
      font-size: 24px;
      font-weight: 700;
      color: #eee7e0;
    }

    & p {
      margin: 0;
      font-size: 14px;
      color: #eee7e0;
    }

    & .media {
      min-width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #dfcdbb;
      color: #3b2618;
      box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);

      & p {
        font-size: 23px;
        font-weight: 700;
        line-height: 1;
        color: #3b2618;

        & small {
          margin-top: 3px;
          font-size: 11px;
          opacity: 0.8;
        }
      }
    }
  }

  & .notas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px 0;

    & .nota {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 13px;
      background: #f8f5f2;
      border-radius: 10px;
      font-size: 18px;
      color: #665548;

      & span {
        font-size: 20px;
        color: #6f4528;

      }
    }
  }

  & .observacoes {
    padding: 18px 0;
    border-top: 1px solid #eee7e0;
    border-bottom: 1px solid #eee7e0;

    & h3 {
      margin: 10px;
      font-size: 20px;
      color: #dfcdbb;
    }

    & p {
      margin: 0 20px;
      font-size: 18px;
      color: #eee7e0;
    }
  }

  & .rodape {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding-top: 20px;

    & p {
      margin: 0;
      font-size: 15px;
      color: #f8f5f2;

      & strong {
        color: #eee7e0;
      }
    }
  }
}
</style>
