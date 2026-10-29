# CI Horreur

## Sobre o projeto

O **CI Horreur** é uma aplicação web dedicada ao universo dos filmes de terror. O projeto apresenta uma interface para explorar conteúdos relacionados ao gênero, consultar informações sobre filmes e conhecer a equipe envolvida em seu desenvolvimento.

A aplicação foi desenvolvida com Vue.js, utilizando uma estrutura baseada em componentes e páginas organizadas por rotas.

## Funcionalidades

- **Página inicial:** estrutura de entrada da aplicação.
- **Catálogo de filmes:** área destinada à navegação pelos filmes disponíveis.
- **Detalhes dos filmes:** visualização de informações específicas sobre cada título.
- **Equipe:** página dedicada à apresentação dos integrantes do projeto.
- **Navegação entre páginas:** organização das diferentes áreas por meio de rotas.
- **Gerenciamento de dados:** utilização de serviços e stores para organizar informações relacionadas aos filmes e gêneros.

## Tecnologias utilizadas

- Vue.js
- JavaScript
- Vite
- Vue Router
- Pinia
- Axios
- HTML5 e CSS3

## Estrutura do projeto

```text
ci_horreur/
├── public/          # Imagens e recursos públicos
├── src/
│   ├── assets/      # Recursos visuais e estilos
│   ├── components/  # Componentes reutilizáveis
│   ├── plugins/     # Configurações de plugins
│   ├── router/      # Configuração das rotas
│   ├── services/    # Serviços de acesso a dados
│   ├── stores/      # Gerenciamento de estado
│   ├── views/       # Páginas da aplicação
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Como executar

É necessário ter o Node.js e o npm instalados.

1. Acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador o endereço local informado pelo Vite.

## Objetivo acadêmico

O projeto permite praticar o desenvolvimento de interfaces com Vue.js, a modularização por componentes, a navegação entre páginas e a organização dos dados de uma aplicação web.

Este projeto integra o conjunto de trabalhos desenvolvidos durante minha formação acadêmica.