<script setup>
defineProps({
  totalProdutos: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <aside class="cart-summary">
    <h2 class="summary-title">Total da compra</h2>

    <div class="summary-row border-bottom">
      <span>produtos:</span>
      <span>R$ {{ totalProdutos.toFixed(2).replace('.', ',') }}</span>
    </div>

    <div class="summary-row border-bottom">
      <span>Frete:</span>
      <span class="frete-gratis">Grátis</span>
    </div>

    <div class="summary-row total-row">
      <span>Total:</span>
      <strong>R$ {{ totalProdutos.toFixed(2).replace('.', ',') }}</strong>
    </div>

    <button class="btn-checkout">Ir para pagamento</button>
  </aside>
</template>

<style scoped>
.cart-summary {
  flex: 1;
  border: none;
  padding: 30px 24px;
  background-color: #EDDDC4;
  border-radius: 20px;
  box-shadow: 0 0 50px  rgba(0, 0, 0, 0.5);
  max-width: 380px;
}

.summary-title {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 25px;
  font-weight: 700;
  color: #532222;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 1rem;
  color: #532222;
}

.border-bottom {
  border-bottom: 1.5px solid #532222;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

.total-row {
  font-size: 1.15rem;
  color: #532222;
  font-weight: bold;
}

.frete-gratis {
  color: #0e4139;
  font-weight: normal;
}

.btn-checkout {
  width: 100%;
  background-color: #693339;
  color: #f4edd9;
  border: none;
  padding: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-checkout:hover {
  background-color: #54282d;
}

.btn-checkout:active {
  transform: scale(0.98);
}
</style>
