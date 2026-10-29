# Vue-05 — Componentes

Evolução do projeto de lista de tarefas, com a interface de cada tarefa extraída para um componente reutilizável. O objetivo é praticar a organização de aplicações Vue em partes menores e a comunicação entre componentes.

## Funcionalidades

- Adicionar, editar e excluir tarefas.
- Marcar tarefas como pendentes ou concluídas.
- Pesquisar tarefas por descrição ou número.
- Exibir totais gerais e contagens por status.
- Limpar a lista.
- Validar descrições com pelo menos cinco caracteres.

## Organização e conceitos

- Componente `ItemTarefa` para representar cada tarefa.
- Propriedades (*props*) para transmitir dados ao componente.
- Eventos personalizados para comunicar ações como editar, excluir e alternar o status.
- `ref()` e `computed()` para estado reativo e valores derivados.
- Filtragem e manipulação de arrays.

## Tecnologias

Vue.js 3, JavaScript, HTML, CSS e Vite.

## Como executar

```bash
npm install
npm run dev
```
