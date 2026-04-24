import { tarefas } from '../data/produtos.js';
import { computed, ref } from 'vue';

const alteracao = ref(-1);
const filtro = ref('');
let novaTarefa = ref('');
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
const tarefasPendentes = computed(() => {
  return tarefas.value.filter(t => t.status === 'pendente').length;
});
const tarefasConcluidas = computed(() => {
  return tarefas.value.filter(t => t.status === 'concluida').length;
});


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
export {
  filtro,
  aviso,
  tarefasFiltradas,
  tarefasPendentes,
  tarefasConcluidas,
  adicionarTarefa,
  editarTarefa,
  deleteTarefa,
  marcarConcluida,
  marcarPendente,
  limparLista
};
