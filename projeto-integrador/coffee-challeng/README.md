# Coffee Challenge

## Sobre o projeto

O **Coffee Challenge** é uma aplicação web relacionada ao universo do café, desenvolvida para organizar e apresentar conteúdos por meio de uma interface interativa.

O projeto possui páginas dedicadas à apresentação inicial, às avaliações e aos rankings, utilizando uma estrutura modular para facilitar a organização e a manutenção da aplicação.

## Funcionalidades e páginas

- **Página inicial:** ponto de entrada para a navegação pela aplicação.
- **Avaliações:** página destinada à apresentação de conteúdos relacionados às avaliações.
- **Ranking:** área voltada à exibição de classificações relacionadas ao projeto.
- **Navegação entre páginas:** utilização de rotas para organizar as diferentes seções.
- **Componentes compartilhados:** utilização de cabeçalho e rodapé para manter a consistência visual.
- **Organização de dados:** arquivo dedicado à estruturação de informações sobre cafés.

## Tecnologias utilizadas

- Vue.js
- JavaScript
- Vite
- Vue Router
- HTML5 e CSS3

## Estrutura do projeto

```text
coffee-challeng/
├── public/                 # Recursos públicos
├── src/
│   ├── Components/         # Componentes compartilhados
│   ├── data/               # Dados relacionados aos cafés
│   ├── assets/             # Estilos e recursos visuais
│   ├── router/             # Configuração das rotas
│   ├── views/              # Páginas da aplicação
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Como executar

Para executar o projeto, é necessário ter o Node.js e o npm instalados.

1. Acesse a pasta `coffee-challeng`.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador o endereço local apresentado no terminal.

## Objetivo acadêmico

O Coffee Challenge proporciona a prática de desenvolvimento front-end com Vue.js, organização de páginas, criação de componentes reutilizáveis e gerenciamento da navegação em uma aplicação web.

O projeto faz parte dos trabalhos desenvolvidos durante minha formação acadêmica e representa uma experiência prática de construção de interfaces e organização de conteúdo.