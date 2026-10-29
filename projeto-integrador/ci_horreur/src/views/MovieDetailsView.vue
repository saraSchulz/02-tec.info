<script setup>
import { defineProps, onMounted } from 'vue';
import { useMovieStore } from '@/stores/movie';
const movieStore = useMovieStore();
const props = defineProps({
  movieId: { type: Number, required: true, },
});
onMounted(async () => { await movieStore.getMovieDetail(props.movieId); });
</script>
<template>
  <div class="main">
    <div class="content">

      <div class="details">
        <h1>{{ movieStore.currentMovie.title }}</h1>
        <p class="snp">Sinopse</p>
        <p>{{ translatedOverview || movieStore.currentMovie.overview }}</p>
      </div>
       <div class="info">
      <img
        :src="movieStore.currentMovie.poster_path ? `https://image.tmdb.org/t/p/original${movieStore.currentMovie.poster_path}` : `/SemCapaMovie.png`"
        :alt="movieStore.currentMovie.title"
      />
      <div class="detalhes">
        <div class="classificacao">
              <p>{{ movieStore.currentMovie.adult ? '18' : 'L' }}</p>
          </div>

      <p><i class="mdi mdi-star-check-outline"></i> {{ movieStore.currentMovie.vote_average }}</p>

      </div>
      <button class="voltar">
        <RouterLink to="/">
                    Voltar ao home
          </RouterLink>
      </button>
      </div>
    </div>
  </div>

  <h3 class="prod">Produtoras:</h3>
  <div class="companies">
    <template
      v-for="company in movieStore.currentMovie.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
</template>

<style scoped>
.content{
  display: flex;
  justify-content: space-between;
  & .details{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin:0 5vw 5vw 5vw;
    & h1{
      font-family: Smooch Sans, sans-serif;
      font-size: 40px;
      color: #fff;
      text-align: center;
      margin: 0 0 0 20px ;
    }
    & .snp{
      font-size: 30px;
      color: #fff;
      margin: 10px 20px;
    }
    & p{
      font-size: 20px;
      color: #fff;
      margin: 10px 20px;
      width: 80%;
    }
  }
  & .info{
    width: 40%;
    align-items: center;
    display: flex;
    flex-direction: column;
    & img{
      width: 40%;
      border-radius: 20px;
    }
    & .detalhes{
      color: white;
      margin: 20px 0;
      font-size: 20px;
      display: flex;
      gap: 10px;

      & .classificacao {
      font-size: 20px;
      color: #191919;
      font-weight: bold;
      -webkit-text-stroke: 2px #000000;
      padding: 2px 10px;
      background: #f81f3e;
      border-radius: 5px;
    }
    & p{
      font-size: 20px;
    }
    }
    & .voltar{
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #f81f408e;
      border: 1.5px solid #000;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.5s ease;
      font-family: Smooch Sans, sans-serif;
      & a{
        color: #fff;
        text-decoration: none;
      }

    }
    & .voltar:hover{
        background-color: rgba(0, 0, 0, 0.411);
        border: 1.5px solid #f81f3e;
      }
  }
}
.prod{
  font-size: 30px;
  color: #fff;
  margin: 20px 5vw;
}
.companies{
  display: flex;
  gap: 20px;
  margin: 0 5vw 50px 5vw;
  & img{
    height: 30px;
    background-color: #f81f3e;
    padding: 5px;
  }
}
</style>
