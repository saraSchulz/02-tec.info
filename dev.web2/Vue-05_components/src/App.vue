<script setup>

import ItemTarefa from './components/ItemTarefa.vue'
import { listatarefas } from './data/produtos.js';
import {
  adicionarTarefa,
  editarTarefa,
  deleteTarefa,
  marcarConcluida,
  marcarPendente,
  limparLista,
  filtro,
  novaTarefa, aviso,
} from './functions/funcao.js';


const adicionar = adicionarTarefa;
const editar = editarTarefa;
const deletar = deleteTarefa;
const Concluida = marcarConcluida;
const Pendente = marcarPendente;
const limpar = limparLista;
const tarefas = listatarefas;

</script>

<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <div class="add">
      <label for="text">Adicionar nova tarefa:</label>

      <input type="text" id="text" placeholder="Descrição da tarefa" v-model="novaTarefa"
        @keyup.enter="adicionar">

      <button class="adicionar" @click="adicionar">Adicionar</button>

      <div v-show="aviso" class="aviso">Digite ao menos 5 caracteres!</div>
    </div>
    <div class="tarefas">
      <p class="total">
        Total de tarefas: {{ tarefas.length }}
      </p>
      <p class="pendente">
        Tarefas pendentes: {{ tarefasPendentes }}
      </p>
      <p class="concluida">
        Tarefas concluídas: {{ tarefasConcluidas }}
      </p>
    </div>
    <ul>
      <ItemTarefa v-for="tarefa in tarefasFiltradas" :key="tarefa.id" :tarefa="tarefa" @editar="editar"
        @deletar="deletar" @toggle="(tarefa) => {
          if (tarefa.status === 'pendente') {
            Concluida(tarefa.id)
          } else {
            Pendente(tarefa.id)
          }
        }" />
      <input type="text" placeholder="Procurar Tarefas" v-model="filtro" class="filtro">
      <button @click="limpar" class="limpar">Limpar Lista</button>
    </ul>
  </div>
</template>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1{
    font-size: 30px;
    color: #8c00ff;
    font-weight: bold;
  }
  & .add{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    & label{
      font-size: 18px;
      margin-bottom: 10px;
    }
    & input{
      padding: 10px;
      width: 300px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      text-align: center;
    }
    & .adicionar{
      padding: 10px 20px;
      background-color: #8c00ff;

    }
    & .aviso{
      color: red;
      margin-top: 10px;
    }
  }
  & .tarefas{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    & p{
      font-size: 16px;
      &.total{
        color: #a200ff;
      }
      &.pendente{
        color: #ff0062;
      }
      &.concluida{
        color: #ea00ff;
      }
    }
  }
  & ul{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input{
      padding: 10px;
      width: 300px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      text-align: center;
    }
    & .filtro{
      margin-top: 20px;
    }
    & .limpar{
      padding: 10px 20px;
      background-color: #ff0040;

  }
}
}
</style>
