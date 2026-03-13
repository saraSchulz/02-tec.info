<script setup>
import { ref } from 'vue'
let tarefas = ref([
  { id: 1, desc: 'Estudar VueJS', status: 'pendente' },
  { id: 2, desc: 'Fazer tudo-list', status: 'pendente' },
  { id: 3, desc: 'Deploy contador Vue', status: 'concluida' }
]);
let novaTarefa = ref('');
const alteracao = ref(-1);

let maiorId = Math.max(...tarefas.value.map(item => item.id));
function adicionarTarefa() {
  tarefas.value.push({ id: maiorId + 1, desc: novaTarefa.value, status: 'pendente' });
  novaTarefa.value = '';
}
function marcarConcluida(id) {
  const posicao = tarefas.value.findIndex(item => item.id === id);
  tarefas.value[posicao].status = 'concluida';
}
function marcarPendente(id) {
  const posicao = tarefas.value.findIndex(item => item.id === id);
  tarefas.value[posicao].status = 'pendente';
}
function editarTarefa(item) {
  alteracao.value = tarefas.value.indexOf(item);
  novaTarefa.value = item;
}

</script>

<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <div class="add">
      <label for="text">Adicionar nova tarefa:</label>
      <input type="text" id="text" placeholder="Descrição da tarefa" v-model="novaTarefa"
        @keyup.enter="adicionarTarefa">
      <button @click="adicionarTarefa">Adicionar</button>
    </div>
    <ul>
      <li v-for="item in tarefas" :key="item.id" @click="{
        if (item.status === 'pendente') {
          marcarConcluida(item.id);
        } else {
          marcarPendente(item.id);
        }
      }" :class="{
      'concluida': item.status === 'concluida'
    }">
        {{ item.desc }} <span class="status">| {{ item.status }}</span>
        <span>
          <a href="#" @click.prevent="editarTarefa(item)" class="editar"> Editar </a>
          <a href="#" @click.prevent="deleteTarefa(item)" class="deletar"> Delete </a>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: #c76000;
  font-size: 50px;
}

.add {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    font-size: 20px;
    color: #ffb496;
  }

  & input {
    padding: 10px;
    font-size: 16px;
    border: 1.5px solid #ffc290;
    border-radius: 4px;
    text-align: center;
  }

  & button {
    padding: 10px;
    font-size: 16px;
    background-color: #c76000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
}

ul {
  list-style: none;
  padding: 0;

  & li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    & .status {
      font-size: 14px;
      color: #888;
      text-transform: capitalize;
    }
  }
}

.concluida {
  color: #000;

  & .status {
    color: #2eff51;
  }

}
</style>
