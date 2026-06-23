<script setup>

</script>

<template>
  <footer>
    <div class="footer-content">
      <div class="redes">
        <p>
          <i class="mdi mdi-facebook"></i>
        </p>
        <p>
          <i class="mdi mdi-instagram"></i>
        </p>
        <p>
          <i class="mdi mdi-twitter"></i>
        </p>
      </div>

      <div class="contato">
        <h2>Contato</h2>
        <p>
          <i class="mdi mdi-phone-classic"></i> +55 (47) 0 1234-5678
        </p>
        <p>
          <i class=" mdi mdi-calendar-multiselect"></i> 8h - 17h | seg - sex
        </p>
        <p>
          <i class="mdi mdi-email"></i> contato@livraria.com
        </p>
      </div>
    </div>
    <hr>
    <p class="direitos">&copy; Alguns direitos reservados. classic books 2026. </p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #6F363A;
  padding: 50px;
  text-align: center;
  color: #EDDDC4;

  box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.37);

  & .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    padding: 1rem 0;


    & .redes {
      display: flex;
      font-size: 40px;

      & p {
        margin: 0 10px;
        cursor: pointer;
        transition: 0.3s;
        color: #EDDDC4;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    & .contato {
      text-align: left;
      font-size: 20px;

      & h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        font: bold;
      }

      & p {
        margin: 20px 0;
      }
    }
  }

  & hr {
    color: #EDDDC4;
    margin: 10px 0;
  }

  & .direitos {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
