<script setup>
defineProps(['desc', 'status', 'estilo'])

defineEmits(['click'])
</script>
<template>

  <button :class="[estilo, tipo]"
    @click.prevent="$emit('click', nome)"
  >
    <slot></slot>
  </button>

</template>
<style scoped>
.btn {
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.btn.salvar {
  background-color: mediumspringgreen;
}

.btn.editar {
  background-color: yellow;
}

.btn.cancelar {
  background-color: orange;
}

.btn.excluir {
  background-color: red;
}

.btn.novo {
  background-color: lawngreen;

}
</style>
