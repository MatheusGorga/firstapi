# API de Gerenciamento de Usuários - Firstapi
Primeira API criada com node puro, feita no curso JStack de Mateus Silva
Este é um exemplo de API de gerenciamento de usuários em Node.js. Ele lida com operações básicas de CRUD (Create, Read, Update, Delete) para usuários, permitindo listar, buscar, criar, atualizar e excluir informações de usuários.

## Pré-requisitos

- Node.js instalado (versão recomendada: 12 ou superior)
- npm (Node Package Manager) instalado

## Instalação

1. Clone este repositório para o seu computador:

git clone https://github.com/MatheusGorga/firstapi
cd firstapi


## Uso

- npm src/index.js
- Acesse as rotas da API em http://localhost:8000.

## Rotas

A API oferece as seguintes rotas:

- GET /users: Lista todos os usuários.
- GET /users/:id: Busca um usuário pelo ID.
- POST /users: Cria um novo usuário.
- PUT /users/:id: Atualiza os detalhes de um usuário existente.
- DELETE /users/:id: Exclui um usuário pelo ID.

## Estrutura do Código

- routes.js: Definição das rotas da API.
- controller/UserController.js: Lógica de manipulação das rotas.
- helpers/bodyParser.js: Função para análise do corpo da requisição.
- index.js: Configuração do servidor.
