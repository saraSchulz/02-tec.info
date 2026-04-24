<script setup>
defineProps(['tarefa'])
const emit = defineEmits(['editar', 'deletar', 'toggle']);
</script>

<template>
  <li>
    <span class="num">
      N° {{ tarefa.id }}
    </span>

    <span
      @click="emit('toggle', tarefa)"
      :class="{
        'concluida-status': tarefa.status === 'concluida',
        'pendente-status': tarefa.status === 'pendente'

       }"
    >
      {{ tarefa.desc }} | {{ tarefa.status }}
    </span>

    <span>
      <button class="editar" @click="emit('editar', tarefa)">✎ Editar</button>
      <button class="deletar" @click="emit('deletar', tarefa)">🗑 Delete</button>
    </span>
  </li>
</template>

<style scoped>
li{
  color: #7928e2;
  list-style: none;
  margin: 10px;
   border-bottom: 1px solid #ffffff;
  & .num{
    color: #e22856;
    font-weight: bold;
    margin: 0 5px;
  }
   & .pendente-status{
      color: #ff008c;
      margin: 10px;
    }
    & .editar{
      background-color: #e228d2;

    }
    & .deletar{
      background-color: #ff0040;

    }


}
</style>
