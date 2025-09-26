# 📝 To-Do List API  

API REST simples para gerenciamento de tarefas (**To-Do List**).  
Permite criar, listar, atualizar e excluir tarefas.  

---

## 🚀 Tecnologias utilizadas  

- **Node.js** – ambiente de execução JavaScript  
- **Express.js** – framework web para criar rotas HTTP  
- **SQLite** – banco de dados leve e simples  
- **Sequelize** – ORM para facilitar a manipulação do banco  
- **Nodemon** – ferramenta para reiniciar o servidor automaticamente em desenvolvimento  
- **Postman/Insomnia** – para testar os endpoints  

---

## 📂 Estrutura de pastas  

```bash
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
```

## 🗂️ Modelo da Tarefa (Task)
- Cada tarefa possui:

- id → gerado automaticamente

- title → título da tarefa

- description → descrição da tarefa

- done → booleano (default: false)

- createdAt → data/hora de criação

# 🔗 Endpoints
## ➕ Criar tarefa

``` bash
POST /tasks

{
  "title": "Estudar Node.js",
  "description": "Ler documentação oficial"
}
```

## 📋 Listar todas as tarefas

```` bash
GET /tasks
Retorna todas as tarefas em JSON.
````

## 🔍 Buscar tarefa por ID

GET /tasks/:id

## ✏️ Atualizar tarefa

PUT /tasks/:id

```` bash
{
  "title": "Estudar Express",
  "description": "Fazer mini projeto",
  "done": true
}
````

## ❌ Excluir tarefa

DELETE /tasks/:id

## 🧪 Testando a API

POST http://localhost:3000/tasks

GET http://localhost:3000/tasks
