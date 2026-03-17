<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false);
</script>

<template>
  <header>
    <h1 class="logo">
      <img src="/public/logo.png" alt="logo">
    </h1>
    <nav :class="{ active: menuOpen }">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Story</a>
        </li>
        <li>
          <a href="#">Detals</a>
        </li>
        <li>
          <a href="#">RSPV</a>
        </li>
      </ul>
    </nav>
    <button class="menu-btn" @click="menuOpen = !menuOpen">
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
    </button>
  </header>
  <section class="banner">
    <h2>
      Karen<span>&</span>Felipe
    </h2>
    <h3>june, 23rd 2026</h3>
  </section>
  <section class="intro">
    <p>
      With love and gratitude, we invite you to share in the joy of our wedding day.
    </p>
    <p>
      Tuesday, june, 2026 The Golden Elm Manor, St. Augustine, New York
    </p>
  </section>
  <section class="cards">
    <a href="#" class="story">
      <h3>Our Story</h3>
    </a>
    <a href="#" class="detals">
      <h3>The Detals</h3>
    </a>
    <a href="#" class="rspv">
      <h3>RSPV</h3>
    </a>
    <a href="#" class="regitry">
      <h3>Registry</h3>
    </a>

  </section>
  <section class="registry">
    <h3>Registry</h3>
    <p>
      Your presence is the most cherished gift. Should you wish to contribute, we've created a honeymoon registry to
      help us embark on a memorable adventure to the Amalfi Coast.
    </p>
    <button>
      <a href="#">
        GO to Registry!
      </a>
    </button>
  </section>
  <section class="message">
    <h3>
      Message
    </h3>
    <p>
      If you wish to leave a message or token of appreciation for the couple, they will read it on the big day.
    </p>
    <button>
      <a href="#">
        Leave message!
      </a>
    </button>
  </section>
  <footer>
    <h1>
      <img src="/public/logo-footer.png" alt="footer-logo">
    </h1>
    <h2>
      Tuesday, June, 23rd 2026
    </h2>
    <p>
      &copy; 2026 Karen & Felipe. All rights reserved.
    </p>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  width: 100%;
  z-index: 1200;
  margin: 0;
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.5);

  & img {
    margin: 20px;
  }

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;

    & li {
      color: #fff;
      list-style: none;
      margin: 10px;
      font-size: 30px;
      text-decoration: underline 1px solid;
      text-align: center;
    }

    & .menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      margin-right: 20px;
    }

    & .menu-icon {
      width: 25px;
      height: 3px;
      background: white;
      display: block;
    }
  }
}

.banner {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h2 {
    color: #fff;
    font-size: clamp(40px, 10vw, 100px);
    font-weight: normal;
    margin: 60px 0 0 0;

    & span {
      color: #FFF94D;
    }
  }

  & h3 {
    color: #fff;
    font-size: 25px;
    font-weight: normal;
    margin: 0 0 60px 0;
  }

  & .menu-btn {
    width: 35px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1200;
    position: relative;
    transition: all 0.5s ease;
    margin: 0 20px;
  }
}

.intro {
  background: url(/public/flowers.png ) no-repeat center center/cover;
  min-height: 800px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  & p {
    font-size: clamp(35px, 4vw, 50px);
    width: 90%;
    color: #fff;
    text-shadow: 0 0 30px #ffffffaf;

  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  & a {
    width: 35%;
    padding: 300px 0;
    margin: 50px;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.705);

    & h3 {
      color: #fff;
      text-shadow: 0 0 30px #ffffffaf;
      text-decoration: underline 1.5px;
      font-size: 45px;
      font-weight: normal;
      transition: all 1s ease;
    }

    & h3:hover {
      color: #000;
    }

  }

  & .story {
    background: url(/public/folha.png) no-repeat center center/cover;

  }

  & .detals {
    background: url(/public/carta.png) no-repeat center center/cover;
  }

  & .rspv {
    background: url(/public/aliacas.png) no-repeat center center/cover;
  }

  & .regitry {
    background: url(/public/book.png) no-repeat center center/cover;
  }
}

.registry {
  background: url(/public/flores.png ) no-repeat center center/cover;
  min-height: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 50px 0;
  gap: 50px;

  & h3 {
    color: #fff;
    text-shadow: 0 0 30px #ffffffaf;
    font-size: 50px;
    font-weight: normal;
  }

  & p {

    color: #fff;
    text-shadow: 0 0 30px #ffffffaf;
    font-size: clamp(30px, 4vw, 50px);
    width: 65%;

  }

  & button {
    background-color: #ff590083;
    border: 2px solid #fff;
    color: #fff;
    font-size: clamp(20px, 4vw, 40px);
    border-radius: 40px;
    padding: 10px 100px;
    transition: all 0.7s ease;
  }

  & button:hover {
    background-color: #ffffff81;
    color: #000;
  }
}

.message {
  background: url(/public/mesage.png ) no-repeat center center/cover;
  min-height: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 100px 0 30px 0;
  gap: 50px;

  & h3 {
    color: #fff;
    text-shadow: 0 0 30px #ffffffaf;
    font-size: 45px;
  }

  & p {

    color: #fff;
    text-shadow: 0 0 30px #ffffffaf;
    font-size: clamp(30px, 4vw, 50px);
    width: 40%;

  }

  & button {
    background-color: #ff590083;
    border: 2px solid #fff;
    color: #fff;
    font-size: clamp(20px, 4vw, 40px);
    border-radius: 40px;
    padding: 10px 100px;
    transition: all 0.7s ease;
  }

  & button:hover {
    background-color: #ffffff81;
    color: #000;
  }
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;

  & h1 {
    margin: 0;
  }

  & h2 {
    color: #fff;
    font-size: clamp(30px, 4vw, 45px);
    margin: 20px 0;
    text-shadow: 0 0 30px #000000;

  }

  & p {
    color: #000000;
    font-size: clamp(10px, 4vw, 20px);
  }
}

@media (max-width: 768px) {
  header {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .logo {
      font-size: 1rem;
    }

    & nav {
      display: none;
      position: absolute;
      top: 80px;
      right: 0;
      background: #0000009c;
      width: 200px;
      flex-direction: column;
      border-radius: 20px;
    }

    & nav.active {
      display: flex;
    }

    & ul {
      flex-direction: column;

      & li {
        font-size: 20px;
      }
    }

    & .menu-btn {
      width: 35px;
      height: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #00000000;
      border: none;
      margin: 10px;
    }

    & .menu-icon {
      width: 25px;
      height: 3px;
      background: white;
      border-radius: 5px;
      display: block;
      z-index: 1300;
    }
  }

  .cards {
    margin: 20px 0;

    & a {
      width: 80%;
      padding: 200px 0;
      margin: 20px 0;
    }
  }
}
</style>
