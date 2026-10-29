<script setup>
import { ref } from 'vue'
import { coffees } from '@/data/coffee.js'

const nome = ref('')
const produtor = ref('')

const aroma = ref('')
const sabor = ref('')
const acidez = ref('')
const corpo = ref('')
const finalizacao = ref('')

const observacoes = ref('')
const avaliador = ref('')
const data = ref('')

function adicionarAvaliacao() {
  const novaAvaliacao = {
    id: coffees.length + 1,

    nome: nome.value,
    produtor: produtor.value,

    aroma: Number(aroma.value),
    sabor: Number(sabor.value),
    acidez: Number(acidez.value),
    corpo: Number(corpo.value),
    finalizacao: Number(finalizacao.value),

    observacoes: observacoes.value,
    avaliador: avaliador.value,
    data: data.value
  }

  coffees.push(novaAvaliacao)

  limparFormulario()
}

function limparFormulario() {
  nome.value = ''
  produtor.value = ''

  aroma.value = ''
  sabor.value = ''
  acidez.value = ''
  corpo.value = ''
  finalizacao.value = ''

  observacoes.value = ''
  avaliador.value = ''
  data.value = ''
}
</script>

<template>
  <main class="adicionar-avaliacao">
    <section class="formulario-container">
      <div class="titulo">
        <h1>Adicionar avaliação</h1>
        <p>
          Registre uma nova avaliação de café.
        </p>
      </div>
      <form @submit.prevent="adicionarAvaliacao">
        <div class="campo">
          <label for="nome">Nome do café</label>
          <input id="nome" v-model="nome" type="text" placeholder="Ex: Bourbon Amarelo" required>
        </div>

        <div class="campo">
          <label for="produtor">Produtor</label>
          <input id="produtor" v-model="produtor" type="text" placeholder="Ex: Fazenda São José" required>
        </div>
        <div class="avaliacao-notas">
          <div class="campo">
            <label for="aroma">Aroma</label>
            <input id="aroma" v-model="aroma" type="number" min="0" max="10" step="1" required>
          </div>
          <div class="campo">
            <label for="sabor">Sabor</label>
            <input id="sabor" v-model="sabor" type="number" min="0" max="10" step="1" required>
          </div>
          <div class="campo">
            <label for="acidez">Acidez</label>
            <input id="acidez" v-model="acidez" type="number" min="0" max="10" step="1" required>
          </div>
          <div class="campo">
            <label for="corpo">Corpo</label>
            <input id="corpo" v-model="corpo" type="number" min="0" max="10" step="1" required>
          </div>
          <div class="campo">
            <label for="finalizacao">Finalização</label>
            <input id="finalizacao" v-model="finalizacao" type="number" min="0" max="10" step="1" required>
          </div>
        </div>
        <div class="campo">
          <label for="observacoes">Observações</label>
          <textarea id="observacoes" v-model="observacoes" placeholder="Descreva as características do café..." rows="4"
            required></textarea>
        </div>
        <div class="campo">
          <label for="avaliador">Avaliador</label>
          <input id="avaliador" v-model="avaliador" type="text" placeholder="Nome do avaliador" required>
        </div>
        <div class="campo">
          <label for="data">Data da avaliação</label>
          <input id="data" v-model="data" type="date" required>
        </div>
        <button type="submit">
          Adicionar avaliação
        </button>
      </form>
    </section>
  </main>
  <div class="space"></div>
</template>
<style scoped>
.adicionar-avaliacao {
  min-height: 100vh;
  padding: 50px 20px;
  box-sizing: border-box;
  background: #3b2618;

  & .formulario-container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    padding: 35px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #e4ddd5;
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(70, 45, 25, 0.08);

    & .titulo {
      margin-bottom: 30px;

      & h1 {
        margin: 0 0 8px;
        font-size: 30px;
        font-weight: 700;
        color: #3b2618;
      }

      & p {
        margin: 0;
        font-size: 15px;
        line-height: 1.5;
        color: #7b6b5d;
      }
    }

    & form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & .campo {
        display: flex;
        flex-direction: column;
        gap: 7px;

        & label {
          font-size: 14px;
          font-weight: 600;
          color: #493426;
        }

        & input,
        & textarea {
          width: 100%;
          padding: 12px 14px;
          box-sizing: border-box;
          border: 1px solid #ddd3ca;
          border-radius: 10px;
          background: #fdfcfb;
          font-family: inherit;
          font-size: 14px;
          color: #3b2618;
          outline: none;
          transition: 0.2s ease;
        }

        & input {
          height: 45px;
        }

        & textarea {
          min-height: 110px;
          resize: vertical;
        }

        & input:focus,
        & textarea:focus {
          border-color: #6f4528;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(111, 69, 40, 0.08);
        }

        & input::placeholder,
        & textarea::placeholder {
          color: #aa9e95;
        }
      }

      & .avaliacao-notas {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        padding: 20px;
        background: #f8f5f2;
        border-radius: 14px;
        border: 1px solid #eee7e0;

        & .campo {
          gap: 7px;

          & label {
            font-size: 13px;
            text-align: center;
          }
        }

        & input {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
      }

      & button {
        width: 100%;
        height: 48px;
        margin-top: 5px;
        border: none;
        border-radius: 10px;
        background: #6f4528;
        color: #ffffff;
        font-family: inherit;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.25s ease;
      }

      & button:hover {
        background: #58361f;
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(70, 45, 25, 0.18);
      }

      & button:active {
        transform: translateY(0);
      }
    }
  }
}
.space{
  background: linear-gradient(180deg, #3b2618, #DCC8B0);
  padding: 25px;
}
</style>