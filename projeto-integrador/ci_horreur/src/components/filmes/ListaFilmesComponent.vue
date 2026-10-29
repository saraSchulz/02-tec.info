<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref(false);
const movies = ref([]);

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

onMounted(async () => {
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: 27,
      language: 'pt-BR',
      sort_by: 'vote_average.desc',
      page: 1,
    }
  });
  const response2 = await api.get('discover/movie', {
    params: {
      with_genres: 27,
      language: 'pt-BR',
      sort_by: 'vote_average.desc',
      page: 2,
    }
  });

  const list = [...response.data.results, ...response2.data.results];
  movies.value = list.slice(0, 40);
  isLoading.value = false;
});

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}
</script>

<template>
  <section class="melhoresFilmes">
    <h2>Filmes de Terror</h2>

    <loading v-model:active="isLoading" is-full-page />

    <div class="movie-list" >
      <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="openMovie(movie.id)">
        <div class="img">
        <img class="capa" :src="movie.poster_path
          ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
          : `/semCapa.png`" :alt="movie.title"  />
        </div>
        <div class="movie-details">
          <p class="movie-title">{{ movie.title }}</p>
          <p class="movie-rating">
            <i class="mdi mdi-star-check-outline"></i>  {{ movie.vote_average }}
          </p>
          <p class="movie-release">Lançamento: {{ formatDate(movie.release_date) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.melhoresFilmes {
  padding: 3vw;
  background: linear-gradient(to bottom, #191919 0%, #680c1a 45%, #F81F3E 50%, #680c1a 60%, #191919 100%);

  & h2 {
    text-align: center;
    font-size: 40px;
    margin: 20px 0;
    color: #ffffff;
    transition: all 0.5s ease;
  }

  & h2:hover {
    color: #F81F3E;
  }

  & .movie-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & :hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
    & .movie-card {
      width: 250px;
      height: auto;
      background-color: #252525;
      box-shadow: 0 0 10px #000;
      margin: 10px;
      border-radius: 20px;
      cursor: pointer;
      overflow: hidden;


      & .img {
        width: 100%;
        height: 75%;
        object-fit: cover;
        background-color: #F81F3E;
        color: #000;
        text-align: center;

        & img{
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }

      & .movie-details {
        padding: 20px;
        text-align: center;

        & .movie-title {
          font-size: 25px;
          font-weight: bold;
          line-height: 18px;
        }

        & .movie-rating{
          font-family: 30px;
          color: #F81F3E;

        }
        &.movie-release {
          font-size: 30px;
        }
      }
    }
  }

}
</style>
