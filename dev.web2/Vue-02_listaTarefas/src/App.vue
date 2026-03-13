<script setup>
import { ref } from 'vue'
const tarefas = ref([
  'Seminário Geografia',
  'Seminário Português',
  'Avaliação Matemática',
  'Avaliação Física',
  'Folder Sociologia'
])

const novaTarefa = ref('');
const aviso = ref(false);
const alteracao = ref(-1);

function addTarefa() {
  if (novaTarefa.value.trim().length < 5) {
    aviso.value = true;
  }
  else {
    if(alteracao.value == -1){


    tarefas.value.push(novaTarefa.value);
    novaTarefa.value = '';
    } else{
      tarefas.value.splice(alteracao.value, 1, novaTarefa.value);
      novaTarefa.value= '';
      alteracao.value = -1
    }
  }
}
function deleteTarefa(item) {
  const posicao = tarefas.value.indexOf(item);
  tarefas.value.splice(posicao, 1);
}

function editarTarefa(item){
  alteracao.value = tarefas.value.indexOf(item);
  novaTarefa.value = item;
}
</script>

<template>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <input type="text" v-model="novaTarefa" @keyup.enter="addTarefa"
      @input="novaTarefa.length < 5 ? aviso = true : aviso = false">
    <button @click="addTarefa" class="add">Add</button>
    <div v-show="aviso" class="aviso">Digite ao menos 5 caracteres!</div>
    <ul>
      <li v-for="tarefa in tarefas" :key="tarefa">
        {{ tarefa }}
        <span>
          <a href="#" @click.prevent="editarTarefa(tarefa)" class="editar"> Editar </a>
          <a href="#" @click.prevent="deleteTarefa(tarefa)" class="deletar"> Delete </a>
        </span>
      </li>
    </ul>

    <button @click="tarefas.sort((a, b) => a.localeCompare(b, 'pt-BR'))" class="ordenar">
      Ordenar
    </button>
  </div>
</template>

<style scoped>
h1{
  color: #fff;
  font-weight: bold;
  font-size: 35px;
}
input{
  background: #777777;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
button.add{
  border: none;
  background-color: aqua;
  border-radius: 5px;
  padding:  5px 10px;
  margin: 5px;
}
li{
  color: #fff;
  list-style: none;
  font-size: 15px;
    & .editar{
        color : aqua;
        text-decoration: none;
        font-size: 16px;
        margin: 2px
    }
      & .deletar{
        color : #ff0000;
        text-decoration: none;
        font-size: 16px;
        margin: 2px
    }
}
.ordenar{
    background: #777777;
  color: #000;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.aviso {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}


</style>
