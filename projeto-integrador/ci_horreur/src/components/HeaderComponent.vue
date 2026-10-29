<script setup>
</script>

<template>
    <header>
        <!-- Menu hamburguer (agora fica à esquerda) -->
        <div class="menu-hamburguer">
            <input type="checkbox" id="menu-toggle" />
            <label for="menu-toggle" class="menu-icon">
                <div class="linha"></div>
                <div class="linha"></div>
                <div class="linha"></div>
            </label>

            <!-- Overlay escuro (fora do menu) -->
            <label for="menu-toggle" class="backdrop"></label>

            <!-- Menu lateral -->
            <nav class="overlay">
                <RouterLink to="/">
                    <img src="/logo.png" alt="logo" class="logo" />
                </RouterLink>
                <ul class="menu-list">
                    <li>
                        <RouterLink to="/">
                            <i class="mdi mdi-home"></i> Home
                        </RouterLink>
                    </li>
                    <li>
                        <routerLink to="/movies">
                            <i class="mdi mdi-movie-open"></i>
                            Filmes
                        </routerLink>
                      </li>
                    <li>
                        <RouterLink to="/equipe">
                            <i class="mdi mdi-account-supervisor"></i> Sobre nós
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>

        <h1 class="logo">
            <RouterLink to="/">
                <img src="/logo.png" alt="logo">
            </RouterLink>
        </h1>
    </header>
    <div class="spaceHeader"></div>
</template>

<style scoped>
/*====================================
				HEADER
=====================================*/
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
}

header h1 img {
    height: 80px;
    margin: 0 20px;
}

/*============ Menu hamburguer ===========*/
.menu-hamburguer {
    z-index: 1100;
}

#menu-toggle {
    display: none;
}

.menu-icon {
    width: 35px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1200;
    position: relative;
    transition: all 0.3s ease;
    margin: 0 20px;
}

.menu-icon:hover .linha {
    background: #f81f40;
}

div.linha {
    height: 4px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    transition: all 1s ease;
}

/*============ Overlay escuro fora do menu ===========*/
.backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
    z-index: 900;
}

#menu-toggle:checked~.backdrop {
    opacity: 1;
    pointer-events: auto;
}

/*============ Menu lateral ===========*/
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    max-width: 350px;
    height: 100%;
    background: linear-gradient(to bottom, #3A3A3A 0%, #191919 100%);
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;
    z-index: 1000;
    padding: 40px 20px;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);
}

#menu-toggle:checked~.overlay {
    transform: translateX(0);
}

/*============ Menu interno ===========*/



.menu-list {
    list-style: none;
    padding: 0;
    margin: 0;

    & li {
        margin: 20px 0;
        font-size: 25px;
        color: #ffffff;
        transition: color 0.5s ease;
        cursor: pointer;


    }

    & li:hover {
        color: #F81F3E;
        text-shadow: 0 0 10px #f81f40ab;
    }
}
/*==================spaceHeader============= */
.spaceHeader{
    padding: 100px;
}
</style>
