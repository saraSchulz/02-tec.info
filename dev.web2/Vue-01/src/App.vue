<script setup>
import { ref } from "vue"
const nome = ref('Sara Schulz');
const contador = ref(0);

function incrementar(){
    if(contador.value < 10){
    contador.value++
    }
}
function decrementar(){

    if(contador.value > 0 ){
    contador.value--
    }
}
</script>

<template>
<div class="geral">
<h1>Contador de {{ nome }}</h1>
<div class="contadorValor">

  <p>Valor do Contador: <span> {{ contador }}</span></p>
  <button @click="incrementar" class="mais" :disabled="contador >= 10">+</button>
  <button @click="decrementar" class="menos" :disabled="contador <= 0">-</button>

</div>
</div>
</template>

<style scoped>
.geral{
  display: flex;
  flex-direction: column;
}
h1{
  font-size: 80;
  color: #ff5e00;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  transition: all 1.5s ease;
  margin: 20px;
}
h1:hover{
  color: #ff00ff;
}
p{
  font-size: 70;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  & span{
    color: #ff0000;
  }
}

button.mais{
    color: #0004ff
  }
button.menos{
    color:#ff0000
  }
button{
  background: none;
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
  color: #585858;
  background-color: #585858;
}

</style>
