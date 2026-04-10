<script setup>
import { computed, ref } from 'vue'
import ItemTarefa from './components/ItemTarefa.vue'
const filtro = ref('');
let tarefas = ref([
  { id: 1, desc: 'Estudar VueJS', status: 'pendente' },
  { id: 2, desc: 'Fazer tudo-list', status: 'pendente' },
  { id: 3, desc: 'Deploy contador Vue', status: 'concluida' }
]);

let novaTarefa = ref('');
const alteracao = ref(-1);
const aviso = ref(false);
const tarefasPendentes = computed(() => {
  return tarefas.value.filter(t => t.status === 'pendente').length;
});

const tarefasConcluidas = computed(() => {
  return tarefas.value.filter(t => t.status === 'concluida').length;
});

//Filtro
let tarefasFiltradas = computed(() => {
  const termo = filtro.value.toLowerCase().trim();

  if (termo.length > 0) {
    return tarefas.value.filter(tarefa =>
      tarefa.desc.toLowerCase().includes(termo) ||
      tarefa.id.toString().includes(termo)
    );
  } else {
    return tarefas.value;
  }
});
//Tarefas
function gerarId() {
  return Math.max(0, ...tarefas.value.map(tarefa => tarefa.id)) + 1;
}
function adicionarTarefa() {
  if (novaTarefa.value.trim().length < 5) {
    aviso.value = true;
    setTimeout(() => aviso.value = false, 2000);
  }
  else {
    aviso.value = false;
    if (alteracao.value == -1) {

      tarefas.value.push({
        id: gerarId(),
        desc: novaTarefa.value,
        status: 'pendente'
      });

      novaTarefa.value = '';
    } else {
      tarefas.value.splice(alteracao.value, 1, {
        id: tarefas.value[alteracao.value].id,
        desc: novaTarefa.value,
        status: tarefas.value[alteracao.value].status
      });

      novaTarefa.value = '';
      alteracao.value = -1;
    }
  }
}


//Status
function marcarConcluida(id) {
  const posicao = tarefas.value.findIndex(tarefa => tarefa.id === id);
  tarefas.value[posicao].status = 'concluida';
}
function marcarPendente(id) {
  const posicao = tarefas.value.findIndex(tarefa => tarefa.id === id);
  tarefas.value[posicao].status = 'pendente';
}



//Editar & excluir
function editarTarefa(tarefa) {
  alteracao.value = tarefas.value.indexOf(tarefa);
  novaTarefa.value = tarefa.desc;
}

function deleteTarefa(item) {
  const posicao = tarefas.value.indexOf(item);
  if (alteracao.value === posicao) {
    alert('Você está editando essa tarefa');
    return;
  }
  tarefas.value.splice(posicao, 1);
}

function limparLista() {
  tarefas.value = [];
}

</script>

<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <div class="add">
      <label for="text">Adicionar nova tarefa:</label>

      <input type="text" id="text" placeholder="Descrição da tarefa" v-model="novaTarefa"
        @keyup.enter="adicionarTarefa">

      <button class="adicionar" @click="adicionarTarefa">Adicionar</button>

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
      <ItemTarefa v-for="tarefa in tarefasFiltradas" :key="tarefa.id" :tarefa="tarefa" @editar="editarTarefa"
        @deletar="deleteTarefa" @toggle="(tarefa) => {
          if (tarefa.status === 'pendente') {
            marcarConcluida(tarefa.id)
          } else {
            marcarPendente(tarefa.id)
          }
        }" />
      <input type="text" placeholder="Procurar Tarefas" v-model="filtro" class="filtro">
      <button @click="limparLista" class="limpar">Limpar Lista</button>

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
