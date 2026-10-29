<script setup></script>

<template>
  <footer>
    <div class="maior">
      <ul>
        <p>Redes Sociais:</p>
        <li>
          <a href="https://www.instagram.com/sussuros.do.oceano/">
          <i class="mdi mdi-instagram"></i>
          @Sussurros.do.oceano
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61581676725363">
          <i class="mdi mdi-facebook"></i>
          Sussurros do Oceano
          </a>
        </li>
      </ul>
      <div class="central">
        <div class="logoFooter">
          <RouterLink to="/">
          <img src="/logo.png" alt="logo" class="logo" />
          sussurros do oceano
        </RouterLink>
        </div>
        <div class="direitos">
          <p>&copy; Alguns direitos reservados<br />Sussurros do Oceano 2025.</p>
          <p>Desenvolvido por Sara Schulz</p>
        </div>
      </div>
      <ul>
        <p>Contato:</p>
        <li>
          <i class="mdi mdi-email"></i>
          sussurros.do.oceano2025@gmail.com
        </li>
        <li>
          <i class="mdi mdi-phone-classic"></i>
          +55 (47) 992067618
        </li>
      </ul>
    </div>

  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(to bottom, #90e0ef 0%, #0077b6 50%, #003450 100%);

  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  padding: 50px;

  & .maior {
    display: flex;
    justify-content: space-between;

    & p {
      font-size: 25px;
      color: #ffffff;
    }
    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 10px 20px;

      & li {
        margin: 20px 10px;
        font-size: 15px;
      }
    }
    & .central {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & .logoFooter {
        a{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0 0 20px;

        & .logo {
          height: 60px;
        }
        }
        & p {
          font-size: 20px;
        }
      }


      & .direitos {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 20px 0 0;

        & p {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
