# ToDoAPI
Crie uma API REST simples para gerenciamento de tarefas (to-do list).
Funcionalidades mínimas:

Criar tarefa

Endpoint: POST /tasks

Corpo: { "title": "Estudar Node.js", "description": "Ler documentação oficial" }

Listar tarefas

Endpoint: GET /tasks

Deve retornar todas as tarefas em formato JSON.

Buscar tarefa por ID

Endpoint: GET /tasks/:id

Atualizar tarefa

Endpoint: PUT /tasks/:id

Corpo: { "title": "...", "description": "...", "done": true }

Excluir tarefa

Endpoint: DELETE /tasks/:id

Regras extras:

Cada tarefa deve ter:

id (gerado automaticamente)

title

description

done (booleano, default = false)

createdAt (data/hora de criação)

🛠️ Tecnologias

Linguagem: JavaScript (Node.js)

Framework Web: Express.js

Banco de dados: SQLite (leve, simples, não precisa de setup complexo)

ORM: Sequelize (facilita CRUD sem muito SQL na mão)

Ferramentas:

nodemon (para rodar o servidor em dev e reiniciar automaticamente)

Postman ou Insomnia (para testar a API)
