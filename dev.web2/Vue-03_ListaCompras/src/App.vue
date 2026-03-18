<script setup>
import { computed, ref } from 'vue'
const filtro = ref('');
let tarefas = ref([
  { id: 1, desc: 'Estudar VueJS', status: 'pendente' },
  { id: 2, desc: 'Fazer tudo-list', status: 'pendente' },
  { id: 3, desc: 'Deploy contador Vue', status: 'concluida' }
]);
let novaTarefa = ref('');
const alteracao = ref(-1);
const aviso = ref(false);
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
  tarefas.value.splice(posicao, 1);
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

      <div v-show="aviso" class="aviso">Digite ao menos 5 caracteres!</div>
    </div>

    <ul>
      <li v-for="tarefa in tarefasFiltradas" :key="tarefa.id">
        <span class="id">
          N° Tarefa: <span class="num">{{ tarefa.id }}</span>
        </span>
        <span @click="{
          if (tarefa.status === 'pendente') {
            marcarConcluida(tarefa.id);
          } else {
            marcarPendente(tarefa.id);
          }
        }" :class="{
          'concluida-desc': tarefa.status === 'concluida'
        }">
          {{ tarefa.desc }}

        <span :class="{
          'concluida-status': tarefa.status === 'concluida',
          'pendente-status': tarefa.status === 'pendente'
        }"> | {{ tarefa.status }}</span>
        </span>
        <span>

          <a href="#" @click.prevent="editarTarefa(tarefa)" class="editar"> ✎ Editar </a>
          <a href="#" @click.prevent="deleteTarefa(tarefa)" class="deletar"> 🗑 Delete </a>

        </span>
      </li>
      <input type="text" placeholder="Procurar Tarefas" v-model="filtro" class="filtro">
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
    color: #fff;


    & .id{
      color: #454545;
      margin: 10px;
      & .num{
        color: #c76000;
        font-weight: bold;
      }
    }
    & .pendente-status{
      color: #c70000;
      margin: 10px;
    }

    & .concluida-desc {
      color: green;
    }

    & .concluida-status {
      color: orange;
      margin: 10px;
    }

    & .editar {
      background: #c76000;
      padding: 5px 10px;
      border-radius: 5px;
      margin: 10px;
      color: #fff;
    }

    & .deletar {
      background: #c70000;
      padding: 5px 10px;
      border-radius: 5px;
      margin: 10px;
      color: #fff;
    }

  }
  & .filtro {
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid #ffc290;
  border-radius: 4px;
  text-align: center;
  margin: 20px;
}
}



</style>
