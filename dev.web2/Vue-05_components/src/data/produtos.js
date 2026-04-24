import { ref } from "vue";

let tarefas = ref([
  { id: 1, desc: 'Estudar VueJS', status: 'pendente' },
  { id: 2, desc: 'Fazer tudo-list', status: 'pendente' },
  { id: 3, desc: 'Deploy contador Vue', status: 'concluida' }
]);
 export{ tarefas as listatarefas}
  