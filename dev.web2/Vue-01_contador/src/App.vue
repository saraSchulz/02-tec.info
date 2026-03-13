<!-- eslint-disable vue/block-lang -->
<script setup >
  import { ref } from 'vue';
  const contador = ref(0);
  const num = ref(5);

  function incrementar() {
    if (contador.value + num.value >= 10) {
      contador.value = 10;
    }else{
      contador.value = contador.value + num.value;
    }
  }

  function decrementar() {
    if (contador.value - num.value <= 0) {
      contador.value = 0;
    }else{
      contador.value = contador.value - num.value;
    }
  }
</script>

<template>
  <div class="container">
    <h1>Valor do Contador: {{ contador }}</h1>
    <div class="input">
      <label for="valor">Valor a incrementar/decrementar:</label>
      <input type="number" v-model="num" max="10" min="1">
    </div>
    <div >
      <button @click="incrementar" :disabled="contador >= 10">Incrementar</button>
      <button @click="decrementar" :disabled="contador <= 0">Decrementar</button>
    </div>
    <div v-if="contador === 10" class="msg">
      <p>O contador está  no máximo!</p>
    </div>
    <div v-if="contador === 0" class="msg">
      <p>O contador esta no mínimo!</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
h1{
  font-size: 25px;
  color: #58fcff;
}
.input{
  font-size: 15px;
}
label{
    color: #5c7879;
  }
input{
    text-align: center;
    margin: 2px;
    background:#222;
    color:white;
    border:1px solid #444;
    padding:5px;
    border-radius: 5px;
  }

  button{
    background:#222;
    color:white;
    border:1px solid #444;
    padding:5px;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  button:hover{
    background: #005052 ;
  }
  button:disabled{
    background-color: #4d4d4d ;
    color: #000;
    cursor: default;
  }
  .msg{
    background: #58fcff;
    color: #222;
    padding: 0 5px;
    border-radius: 5px;
    margin: 10px;
  }
</style>
