<script setup></script>

<template>
  <footer>
    <div class="maior">
      <ul>
        <li>
          <a href="https://www.instagram.com/ci.horreur/">
            <i class="mdi mdi-instagram"></i>
            @ci.horreur
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/playlist/7vrpeoeosmKOt8OJ8xJNZo">
            <i class="mdi mdi-spotify"></i>
            Nossa playlist
          </a>
        </li>
      </ul>
      <div class="centro">
        <p class="direitos"> <span>&copy;</span> Alguns direitos reservados. Ci'horreur. 2025</p>
        <p class="desenvolvido">Desenvolvido por: <span>Pedro Gabriel Vieira</span> <span>Sara Schulz</span></p>
      </div>
      <ul>
        <li>
          <i class="mdi mdi-email"></i>
          ifc.ci.horreur@gmail.com
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
  background: linear-gradient(to bottom, #3A3A3A 0%, #191919 100%);
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.8);
  padding: 50px;

  & .maior {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 10px 20px;

      & li {
        margin: 20px 10px;
        font-size: 30px;
        cursor: pointer;

        & .mdi {
          color: #F81F3E;
        }
      }
    }
    .centro{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 20px;
      margin: 0 20px;
      & .desenvolvido{
        display: flex;
        flex-direction: column;
        line-height: 25px;
      & span {
        font-weight: bold;
        color: #F81F3E;
      }
      }
      & .direitos {
      display: flex;
      align-items: center;
      text-align: center;
      margin: 20px 0 0;
      font-size: 20px;
      transition: all 0.5s ease;

      & span {
        font-size: 25px;
        margin-right: 5px;
        color: #F81F3E;
      }
    }

    & .direitos:hover {
      color: #F81F3E;
    }
    }

  }
}
</style>
