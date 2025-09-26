📝 To-Do List API

API REST simples para gerenciamento de tarefas (To-Do List).
Permite criar, listar, atualizar e excluir tarefas.

🚀 Tecnologias utilizadas

Node.js – ambiente de execução JavaScript

Express.js – framework web para criar rotas HTTP

SQLite – banco de dados leve e simples

Sequelize – ORM para facilitar a manipulação do banco

Nodemon – ferramenta para reiniciar o servidor automaticamente em desenvolvimento

Postman/Insomnia – para testar os endpoints

📂 Estrutura de pastas
to-do-api/
│── node_modules/
│── src/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── database.js
│   └── index.js
│── .gitignore
│── package.json
│── README.md

⚙️ Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/to-do-api.git
cd to-do-api


Instale as dependências:

npm install express sequelize sqlite3 nodemon


Configure o package.json para rodar o servidor com nodemon:

"scripts": {
  "dev": "nodemon src/index.js"
}


Inicie o servidor:

npm run dev

🗂️ Modelo da Tarefa (Task)

Cada tarefa possui:

id → gerado automaticamente

title → título da tarefa

description → descrição da tarefa

done → booleano (default: false)

createdAt → data/hora de criação

🔗 Endpoints
➕ Criar tarefa

POST /tasks

{
  "title": "Estudar Node.js",
  "description": "Ler documentação oficial"
}

📋 Listar todas as tarefas

GET /tasks
Retorna todas as tarefas em JSON.

🔍 Buscar tarefa por ID

GET /tasks/:id

✏️ Atualizar tarefa

PUT /tasks/:id

{
  "title": "Estudar Express",
  "description": "Fazer mini projeto",
  "done": true
}

❌ Excluir tarefa

DELETE /tasks/:id

🧪 Testando a API

Use o Postman ou Insomnia para enviar requisições.
Exemplo:

POST http://localhost:3000/tasks

GET http://localhost:3000/tasks

📌 Próximos passos (opcionais)

 Adicionar autenticação com JWT

 Paginação de resultados (GET /tasks?page=1&limit=10)

 Deploy em serviços como Heroku, Railway ou Render****
