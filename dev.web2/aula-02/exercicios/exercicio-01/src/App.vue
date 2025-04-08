<script>
export default {
  data() {
    return {
      contador: 0,
    }
  },
  methods: {
    incrementar() {
      this.contador++
    },
    decrementar() {
      if (this.contador > 0) {
        this.contador--
      }
    },
    reiniciar() {
      this.contador = 0
    },
  },
}
</script>

<template>
  <h1>Contador</h1>
  <p>{{ contador }}</p>
  <div class="buttons">
    <button @click="incrementar">➕</button>
    <button @click="reiniciar">🔄</button>
    <button @click="decrementar">➖</button>
  </div>
</template>

<style>
h1 {
  color: #008b8b;
  font-size: 3rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 2vw;
}
p {
  margin: 2vw;
  color: #ffffff;
  font-size: 3vw;
}
div.buttons{
  display: flex;
}
button {
  border: black;
  padding: 5px;
  background-color: black;
  margin: 10px;
  border-radius: 10px;
}
</style>
