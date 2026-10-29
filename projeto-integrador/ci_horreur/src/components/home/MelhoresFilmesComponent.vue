<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const list1 = ref([]);
const list2 = ref([]);
const list3 = ref([]);
const list4 = ref([]);

async function fetchManyPages(params = {}, maxNeeded = 40, maxPages = 10) {
  let collected = [];
  let page = 1;

  try {
    while (collected.length < maxNeeded && page <= maxPages) {
      const { data } = await api.get('/discover/movie', {
        params: { ...params, page }
      });

      const results = data.results || [];
      if (results.length === 0) break;

      for (const m of results) {
        if (!collected.find(x => x.id === m.id)) collected.push(m);
        if (collected.length >= maxNeeded) break;
      }

      page++;
    }
  } catch (err) {
    console.error('Erro ao buscar páginas do TMDB:', err);
  }

  return collected;
}

async function loadMovies() {
  const params = {
    with_genres: 27,
    sort_by: 'vote_average.desc',
    'vote_count.gte': 200,
    language: 'pt-BR'
  };

  const all = await fetchManyPages(params, 40, 5);

  list1.value = all.slice(0, 10);
  list2.value = all.slice(10, 20);
  list3.value = all.slice(20, 30);
  list4.value = all.slice(30, 40);
}

onMounted(loadMovies);

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } }).catch(() => {});
}
</script>

<template>
  <section class="melhoresFilmes">
    <h2>melhores filmes</h2>

    <div class="lista" v-for="(group, i) in [list1, list2, list3, list4]" :key="'list-' + i">
      <div class="scroll">
        <div class="filme" v-for="movie in group" :key="movie.id" @click="openMovie(movie.id)">
          <img
            class="capa"
            :src="movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `/public/semCapa.png`"
            :alt="movie.title"

          />
          <div class="detalhes">
            <p class="title">{{ movie.title }}</p>
            <div class="info">
            <p class="classificacao">{{ movie.adult ? '18' : 'L' }}</p>
            <p class="avaliacao"><i class="mdi mdi-star-check-outline"></i> {{ movie.vote_average?.toFixed(1) }}</p>

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<style scoped>

.melhoresFilmes {
  background: linear-gradient(to bottom, #60000E 0%, #191919 35%, #60000E 65.5%, #191919 100%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 5vw;

  & h2 {
    font-size: 30px;
    margin: 20px 30px;
  }

  & .lista {
    width: 100%;
    overflow: hidden;
    margin: 20px;

    & .scroll {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      scroll-behavior: smooth;

      & .filme {
        margin: 20px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
        background-color: #191919;
        cursor: pointer;



        & .capa {
          height: 300px;
          width: 200px;
        border-radius: 20px 20px 0 0 ;

        }

        & .detalhes {
          color: white;
          margin: 30px 10px;

          & .title {
            font-size: 20px;
            margin-bottom: 2px;
            line-height: 1;
          }
          & .info{
            display: flex;
            gap: 10px;
            align-items: center;


          & .avaliacao {
            font-size: 16px;
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            gap: 5px;
            color: #f81f40;
          }
          & .classificacao {
            font-size: 14px;
            width: 25px;
            text-align: center;
            background-color: #f81f3e;
            color: #191919;
            border-radius: 5px;
            font-weight: bold;
          }
          }
        }
      }
      &  :hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
    }
  }
}

.scroll::-webkit-scrollbar {
  height: 10px;
}

.scroll::-webkit-scrollbar-track {
  background: #000000;
}

.scroll::-webkit-scrollbar-thumb {
  background: #60000E;
  transition: all 1s ease;
  border-radius: 10px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: #f81f4085;
}
</style>
