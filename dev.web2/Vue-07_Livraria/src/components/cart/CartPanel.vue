<script setup>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

 defineProps({
  cartItems: {
    type: Array,
    required: true
  },
  cartTotal: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['increase-qty', 'decrease-qty', 'go-to-store'])
</script>

<template>
  <div class="cart-page">
    <div class="cart-wrapper">
      <h1 class="cart-title">Carrinho</h1>

      <div class="cart-container">

        <div class="cart-main">
          <div class="cart-header">
            <span class="header-titulo">Título</span>
            <span class="header-quantidade">Quantidade</span>
            <span class="header-subtotal">Subtotal</span>
          </div>

          <div class="cart-items">
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :item="item"
              @increase-qty="emit('increase-qty', item)"
              @decrease-qty="emit('decrease-qty', item)"
            />
          </div>

          <div class="footer-layout-container">
            <div class="cart-footer-actions">
              <button class="btn-back" @click="emit('go-to-store')">
                voltar a loja
              </button>

              <div class="coupon-section">
                <input type="text" placeholder="codigo de cumpom" class="coupon-input" />
                <button class="btn-coupon">inserir cupom</button>
              </div>
            </div>

            <CartSummary :totalProdutos="cartTotal" />
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-layout-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 80px;
  margin-top: 60px;
  width: 100%;
}

.cart-footer-actions {
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: flex-start;
  flex: 1;
}

.cart-page {
  min-height: 100vh;
  width: 100%;
  padding: 60px 20px;
  box-sizing: border-box;
  font-family: sans-serif;
}

.cart-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.cart-title {
  font-size: 2rem;
  font-weight: 700;
  color: #532222;
  margin-bottom: 40px;
}

.cart-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.cart-main {
  width: 100%;
}

.cart-header {
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 2px solid #716b77;
  font-size: 1.2rem;
  font-weight: 600;
  color: #532222;
}

.header-titulo {
  flex: 2;
}

.header-quantidade {
  flex: 1;
  text-align: center;
}

.header-subtotal {
  flex: 1;
  text-align: right;
}

.cart-items {
  margin-bottom: 30px;
}

.cart-footer-actions {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
}

.btn-back {
  background: none;
  border: 1.5px solid #532222;
  color: #532222;
  padding: 10px 24px;
  font-size: 0.95rem;
  border-radius: 4px;
  cursor: pointer;
  text-transform: lowercase;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-back:hover {
  background-color: rgba(83, 34, 34, 0.08);
}

.coupon-section {
  display: flex;
  gap: 15px;
  width: 100%;
  max-width: 400px;
}

.coupon-input {
  flex: 1;
  background: none;
  border: 1.5px solid #532222;
  padding: 12px 16px;
  font-size: 0.95rem;
  color: #532222;
  border-radius: 4px;
  outline: none;
}

.coupon-input::placeholder {
  color: rgba(83, 34, 34, 0.6);
}

.btn-coupon {
  background-color: #532222;
  color: #ede2cf;
  border: none;
  padding: 12px 24px;
  font-size: 0.95rem;
  border-radius: 4px;
  cursor: pointer;
  text-transform: lowercase;
}

.custom-summary {
  align-self: flex-end;
  background-color: transparent;
  box-shadow: none;
  padding: 20px 0;
  width: 100%;
}
</style>
