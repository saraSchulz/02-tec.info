<script setup>
</script>
<template>
  <section class="equipe">
    <div class="titulo">
      <h2>Nossa Equipe</h2>
    </div>
    <div class="nossaEquipe">
      <div class="membro">
        <!-- Pedro Gabriel -->
        <p>
          <img src="/public/PedroGabriel.png" alt="Pedro" class="fotoMembro">
        </p>
        <div class="seperar">
          <h3>Pedro Gabriel</h3>
          <input type="checkbox" id="recolhivelPedro" />
          <label for="recolhivelPedro" class="recolhivelPedro-icon">
            <i class="mdi mdi-chevron-up"></i>
          </label>
          <div class="sobre">
            <p>Turma: <span class="resposta">2Info2</span></p>
            <p>Github: <span class="resposta">pedropg22</span></p>
            <p>Email: <span class="resposta">fafnir.pgv@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div class="membro">
        <!-- SARA SCHULZ -->
        <p>
          <img src="/public/SaraSchulz.png" alt="sara" class="fotoMembro">
        </p>
        <div class="seperar">
          <h3>Sara Schulz</h3>
          <input type="checkbox" id="recolhivelSara" />
          <label for="recolhivelSara" class="recolhivelSara-icon">
            <i class="mdi mdi-chevron-up"></i>
          </label>
          <div class="sobre">
            <p>Turma: <span class="resposta">2Info2</span></p>
            <p>Github: <span class="resposta">saraSchulz</span></p>
            <p>Email: <span class="resposta">sara.ifc2024@gmail.com</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.equipe {
  width: 100%;
  text-align: center;
  transition: all 0.5s ease;
  font-size: 20px;
  background: linear-gradient(to bottom, #60000E  30%, #191919 100%);
  margin: 0;

  & .titulo {
    color: #ffffff;
    font-size: 3rem;
    text-align: left;
    margin: 0 50px;
    padding: 2rem 0;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.8);
  }

  & .nossaEquipe {
    padding: 2vw 3vw;
    align-items: center;
    display: flex;
    justify-content: space-around;
    

    & .membro {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 30px 2vw;
      font-size: 20px;
      & .fotoMembro{
        border-radius: 20px;
        border: 4px solid #000000;
      }
      & h3{
        color: #ffffff;
        text-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
      }
      & label{
        cursor: pointer;
        color: #ffffff;
        font-size: 1.5rem;
        transition: color 0.3s ease;
        text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 25px rgba(248, 31, 62, 0.8);
        background: rgba(0, 0, 0, 0.35);
        padding:  0 7px;
        border-radius: 20px;
        transition: all 0.5s ease;
        display: inline-block;
        margin: 10px;
      }
      & label:hover{
        color: #000000;
        background: rgba(248 , 31, 62, 0.5);
      }
      & .sobre {
        background: rgba(25, 25, 25, 0.8);
        padding: 10px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        & p{
          margin: 10px 0;
          font-weight: bold;
          font-size: 20px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
          & .resposta {
            font-size: 17px;
            color: #F81F3E;
          }
        }
      }
    }
  }
}
.sobre {
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}

/*recolhivel Pedro */
#recolhivelPedro {
  display: none;
}
#recolhivelPedro:checked~.sobre {
  transform: scale(1);
}
#recolhivelPedro:checked + label {
  transform: rotate(180deg);
  color: #000000;
  background: rgba(248 , 31, 62, 0.5);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
}
/*recolhivel Sara */
#recolhivelSara {
  display: none;
}
#recolhivelSara:checked~.sobre {
  transform: scale(1);
}
#recolhivelSara:checked + label {
  transform: rotate(180deg);
  color: #000000;
  background: rgba(248 , 31, 62, 0.5);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
}
.space{
  width: 100%;
  padding: 4rem 0;
}
</style>
