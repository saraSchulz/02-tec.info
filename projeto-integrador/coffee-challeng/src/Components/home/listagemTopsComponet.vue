<script setup>
import { computed } from 'vue'
import { coffees, calcularMedia } from '../../data/coffee.js'


// ========================================
// TOP 3 MELHORES CAFÉS
// ========================================

const melhoresCafes = computed(() => {
  return [...coffees]
    .sort((a, b) => {
      return calcularMedia(b) - calcularMedia(a)
    })
    .slice(0, 3)
})


// ========================================
// TOP 3 ÚLTIMAS AVALIAÇÕES
// ========================================

const ultimasAvaliacoes = computed(() => {
  return [...coffees]
    .sort((a, b) => {
      const dataA = a.data.split('/').reverse().join('-')
      const dataB = b.data.split('/').reverse().join('-')

      return new Date(dataB) - new Date(dataA)
    })
    .slice(0, 3)
})
</script>


<template>
  <div class="tops">
    <div class="top">
      <div class="titulo">
        <i class="mdi mdi-trophy"></i>
        <div>
          <h2>Melhores Cafés</h2>
          <p>Os cafés com as maiores médias</p>
        </div>
      </div>
      <div class="lista">
        <div v-for="(cafe, index) in melhoresCafes" :key="cafe.id" class="cafe">
          <div class="posicao">
            <i v-if="index === 0" class="mdi mdi-numeric-1"> </i>
            <i v-else-if="index === 1" class="mdi mdi-numeric-2"> </i>
            <i v-else-if="index === 2" class="mdi mdi-numeric-3"> </i>
          </div>
          <div class="informacoes">
            <h3>
              {{ cafe.nome }}
            </h3>
            <p>
              {{ cafe.produtor }}
            </p>
          </div>
          <p class="media">
            {{ calcularMedia(cafe) }}
            <span>média</span>
          </p>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="titulo">
        <i class="mdi mdi-clock-outline"></i>
        <div>
          <h2>Últimas Avaliações</h2>
          <p>As avaliações realizadas recentemente</p>
        </div>
      </div>
      <div class="lista">
        <div v-for="cafe in ultimasAvaliacoes" :key="cafe.id" class="cafe">
          <i class="mdi mdi-coffee"></i>
          <div class="informacoes">
            <h3>
              {{ cafe.nome }}
            </h3>
            <p>
              Avaliado por {{ cafe.avaliador }}
            </p>
          </div>
          <p class="avaliacao">
            {{ cafe.data }}
            <span>
              Média: {{ calcularMedia(cafe) }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.tops {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 50px auto;

  .top {
    background-color: #6f4e37;
    border-radius: 15px;
    padding: 25px;
    width: 40%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.08);
    min-height: 350px;

    & .titulo {
      display: flex;
      align-items: center;
      gap: 15px;
      margin: 0 25px 25px;

      & i {
        font-size: 38px;
        color: #f5f5f5;
      }

      & h2 {
        margin: 0;
        font-size: 24px;
        color: #f5f5f5;
      }

      & p {
        margin: 5px 0 0;
        color: #DCC8B0;
        font-size: 14px;
      }

    }

    & .lista {
      display: flex;
      flex-direction: column;
      gap: 12px;

      & .cafe {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: #DCC8B0;
        border-radius: 10px;
        transition: 0.2s;
        min-height: 50px;

        & .posicao {
          width: 45px;
          font-size: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #3e2723;
        }

        & .informacoes {
          flex: 1;
          margin-left: 10px;

          & h3 {
            margin: 0;
            font-size: 20px;
            color: #3e2723;
          }

          & p {
            margin: 2px 0 0;
            font-size: 13px;
            color: #6f4e37;
          }
        }

        & .media,
        & .avaliacao {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18px;
          color: #6f4e37;
          margin: 0 20px;

          & span {
            font-size: 11px;
            color: #888;
          }
        }
      }

      & .cafe:hover {
        transform: translateY(-2px);
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
