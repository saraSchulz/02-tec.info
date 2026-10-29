<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import { useRouter } from 'vue-router';

const router = useRouter();


const topHorrorMovies = ref([]);
const currentIndex = ref(0);

async function loadMovies() {
  const { data } = await api.get('/discover/movie', {
    params: {
      with_genres: 27,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 200
    }
  });

  topHorrorMovies.value = data.results.slice(0, 4);
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % topHorrorMovies.value.length
}

function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + topHorrorMovies.value.length) %
    topHorrorMovies.value.length
}
function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } }).catch(() => {});
}
onMounted(loadMovies);
</script>
<template>
  <section class="carousel-container">
    <!-- Slides -->
    <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="movie in topHorrorMovies"
        :key="movie.id"
        class="slide"
        :style="{
          backgroundImage: `linear-gradient(to bottom, #f81f4000 60%, #60000E 95%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }"
        @click="openMovie(movie.id)"
      >
        <div class="overlay">
          <div class="avaliacao">
            <p>Avaliação dos usuários</p>
            <p class="avaliacao">
              <i class="mdi mdi-star-check-outline"></i>
              <span>{{ movie.vote_average.toFixed(1) }}% </span>
            </p>
          </div>
          <div class="detalhes">
            <h1>{{ movie.title }}</h1>
            <div class="classificacao">
              {{ movie.adult ? `18` : `L` }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botões -->
    <button class="btn prev" @click="prevSlide"><i class="mdi mdi-pan-left"></i></button>
    <button class="btn next" @click="nextSlide"><i class="mdi mdi-pan-right"></i></button>
  </section>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  background-color: #191919;
  color: white;
}

/* Área deslizante */
.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.7s ease;
}

/* Cada slide */
.slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
}

.overlay {
  position: absolute;
  bottom: 50%;
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;

  & .avaliacao {
    display: flex;
    flex-direction: column;

    & p {
      font-size: 25px;
      color: #f81f3e;
    }

    & .avaliacao {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      background-color: #191919;
      padding: 10px 45px;
      border-radius: 100px;
      font-size: 50px;
      color: #f81f3e;
    }

    & span {
      margin: -10px;
    }
  }

  & .detalhes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10vw;

    & h1 {
      font-size: 40px;
      margin-bottom: 10px;
      color: #f81f3e;
      background-color: #19191977;
      padding: 5px 10px;
      border-radius: 10px;
    }

    & .classificacao {
      font-size: 30px;
      color: #191919;
      font-weight: bold;
      -webkit-text-stroke: 2px #000000;
      padding: 5px 20px;
      background: #f81f3e;
      border-radius: 10px;
    }
  }
}

/* Botões */
.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #f81f3e;
  font-size: 100px;
  transition: 0.3s;
}

.btn:hover {
  color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
</style>
