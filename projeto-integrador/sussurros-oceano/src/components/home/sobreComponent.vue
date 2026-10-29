<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const images = [
  "/carrossel/img-01.png",
  "/carrossel/img-02.png",
  "/carrossel/img-03.png",
  "/carrossel/img-04.png",
];

const index = ref(0);
let interval = null;

const nextSlide = () => {
  index.value = (index.value + 1) % images.length;
};

const prevSlide = () => {
  index.value = (index.value - 1 + images.length) % images.length;
};

const startInterval = () => {
  interval = setInterval(nextSlide, 10000); // 10s
};

const resetInterval = () => {
  clearInterval(interval);
  startInterval();
};

onMounted(() => {
  startInterval();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <section class="sobre">
    <h2>
      Sussuros do Oceano
    </h2>
    <div class="maior">
      <div class="carousel">
        <div class="slides">
          <button class="btn prev" @click="prevSlide(); resetInterval()"><i
            class="mdi mdi-skip-previous-circle-outline"></i></button>

          <div v-for="(img, i) in images" :key="i" class="slide" :class="{
            active: i === index,
            prev: i === (index - 1 + images.length) % images.length,
            next: i === (index + 1) % images.length,
          }">
            <img :src="img" alt="slide" />
          </div>

          <button class="btn next" @click="nextSlide(); resetInterval()"><i
            class="mdi mdi-skip-next-circle-outline"></i></button>
        </div>
      </div>
      <div class="text">
        <p>
          Os oceanos são fundamentais para a vida na Terra, pois regulam o clima, produzem grande parte do oxigênio e abrigam uma imensa diversidade de espécies. A fauna marinha tem papel essencial na alimentação, na economia e no equilíbrio ambiental, fornecendo recursos naturais e até substâncias usadas na medicina e na biotecnologia.
        </p>

      </div>
    </div>
  </section>
</template>
<style scoped>
.sobre {
  min-height: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  background: #fff;

  & h2 {
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
    color: #333;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
    margin: 20px;
  }

  & .maior {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    width: 100%;

    & .text {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      & p {
        font-size: 25px;
        line-height: 1.6;
        color: #333;
        text-align: right;
        margin: 20px 10px 20px 0;
      }
    }
  }
}

.carousel {
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slides {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 325px;
  height: 205px;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.6s ease-in-out;
  z-index: 0;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  }
}

/* Slide ativo (central) */
.slide.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  z-index: 2;
}

/* Slide anterior */
.slide.prev {
  opacity: 0.5;
  transform: translate(-70%, -50%) scale(0.8);
  z-index: 1;
}

/* Slide próximo */
.slide.next {
  opacity: 0.5;
  transform: translate(20%, -50%) scale(0.8);
  z-index: 1;
}

/* Botões */
.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;
  z-index: 3;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
  transition: all 0.7s;
}

.btn:hover {
  color: #90E0EF;
}

.prev {
  left: -150px;
}

.next {
  right: -150px;
}

</style>

