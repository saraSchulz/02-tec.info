<script setup>

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['decrease-qty', 'increase-qty'])
</script>

<template>
  <div class="cart-item">

    <div class="product-info">
      <img :src="item.image" :alt="item.title" class="item-capa" />
      <div class="text-details">
        <h3 class="item-titulo">{{ props.item.title }}</h3>
        <p class="item-autor">{{ props.item.autor }}</p>
        <p class="item-preco">R${{ props.item.preco.toFixed(2).replace('.', ',') }}</p>
      </div>
    </div>

    <div class="quantity-container">
      <div class="quantity-selector">
        <button class="qty-btn" @click="emit('decrease-qty', item)">-</button>
        <span class="qty-value">{{ item.quantidade }}</span>
        <button class="qty-btn" @click="emit('increase-qty', item)">+</button>
      </div>
    </div>

    <div class="item-subtotal">
      R${{ (item.preco * item.quantidade).toFixed(2).replace('.', ',') }}
    </div>
  </div>
</template>


<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 2px solid #6F363A;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 25px;
  flex: 2;
}

.item-capa {
  width: 100px;
  height: 140px;
  border-radius: 4px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.text-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-titulo {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
  color: #532222;
}

.item-autor {
  font-size: 0.9rem;
  color: #635449;
  margin: 0;
}

.item-preco {
  font-size: 0.95rem;
  font-weight: 600;
  color: #532222;
  margin: 0;
}

.quantity-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.quantity-selector {
  display: flex;
  align-items: center;
  background-color: #EDDDC4;
  border: 1px solid #cbb38a;
  border-radius: 10px;
  padding: 8px 12px;
  gap: 14px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.qty-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #532222;
  font-weight: bold;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qty-btn:hover {
  opacity: 0.7;
}

.qty-value {
  font-weight: 600;
  font-size: 0.95rem;
  color: #532222;
  min-width: 15px;
  text-align: center;
}

.item-subtotal {
  flex: 1;
  text-align: right;
  font-weight: 700;
  font-size: 1.05rem;
  color: #532222;
}
</style>
