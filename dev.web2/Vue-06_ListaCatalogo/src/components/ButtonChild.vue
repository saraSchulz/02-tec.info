<script setup>
defineProps(['class'])
defineEmits(['clique'])
</script>

<template>
    <button :class="$props.class" @click.prevent="$emit('clique')">
        <slot>
        </slot>
    </button>

</template>

<style scoped>

button.excluir {
font-size: 15px;
  background-color: #4d100c; 
  color: white; 
  padding: 3px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: #ea4909 1px 1px  3px;
  margin: 7px 8px;
}

button.excluir:hover {
  background-color: #db4f13; 
}

button.editar {
    font-size: 15px;
  background-color: #285f2b; 
  color: white; 
  padding: 3px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: #0de114 1px 1px 3px;
  margin: 7px 8px;
}

button.editar:hover {
  background-color: #1ab31f; 
}

</style>