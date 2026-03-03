<script setup>
import { ref } from "vue"
const contador = ref(5);
const num = ref(1);
const aviso = ref(false);
const mensagemAviso = ref('')


function incrementar(){
    if(contador.value + num.value >= 10){
      contador.value = 10;
      aviso.value = true;
      mensagemAviso.value = 'chegou ao maximo'

    }else{
      contador.value = contador.value + num.value;
    }
}
function decrementar(){

   if(contador.value - num.value <= 0){
      contador.value = 0;
    }else{
      contador.value = contador.value - num.value;
      aviso.value = true;
      mensagemAviso.value = 'chegou ao minimo'
    }
}

</script>

<template>
<div class="geral">
<h1>Contador: <span> {{ contador }}</span></h1>

  <p>Valor a incrementar<input type="number" v-model="num" max="10" min="0" ></p>
  <div class="button">
  <button @click="incrementar" class="mais" :disabled="contador >= 10" >Adicionar</button>
  <button @click="decrementar" class="menos" :disabled="contador <= 0">Diminuir</button>
  </div>
    <p>Contador está no Maximo!</p>

    <p>Contador está no Minimo!</p>
</div>
</template>

<style scoped>
.geral{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
h1{
  font-size: 80;
  color: #1100ff;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  transition: all 1.5s ease;
  margin: 20px;
}

button{
  background: #1100ff;
  padding: 10px;
  color: #fff;
  border: none;
  padding: 5 10;
  font-weight: bold;
  text-align: center;
  transition: all 0.2s ease;
  margin: 20px;
  box-shadow:  0 0 7px rgba(0, 0, 0, 0.8);
  border-radius: 5px;

}
button:disabled{
  background-color: #1100ff73;
}
.texto{
  background-color: #ff0000;
  color: #fff;
}
</style>
