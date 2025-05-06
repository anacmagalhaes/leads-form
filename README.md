# Leads Form

Este projeto é uma aplicação simples de gerenciamento de leads, desenvolvida com Node.js, Express e MongoDB no backend, e JavaScript (ESM) com React no frontend.

No backend, é possível criar, listar, atualizar, consultar por ID e excluir leads armazenados em um banco de dados MongoDB.  

No frontend, a aplicação permite criar, listar e excluir leads cadastrados, com uma interface desenvolvida com React, Axios para requisições HTTP e TailwindCSS para estilização.

⚠️ **Status:** Em desenvolvimento – ainda não finalizado.

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JavaScript ES Modules
- React
- Axios
- TailwindCSS

## 📦 Pré-requisitos para rodar o projeto

Certifique-se de ter os seguintes itens instalados:

- Node.js  
- MongoDB  
- Git (opcional, para clonar o projeto)

## ⚙️ Como rodar o projeto

### Backend

1. Acesse a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` com a seguinte variável (ajuste conforme sua conexão):

   ```env
   MONGODB_URI=mongodb://localhost:27017/leadsdb
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

> O servidor será iniciado em `http://localhost:3000` (ou conforme configurado).

### Frontend

1. Acesse a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação React:

   ```bash
   npm run dev
   ```

> A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## 📂 Estrutura atual – Backend

```
src/
├── database/
│   └── config.js         # Conexão com o MongoDB
├── models/
│   └── model.js          # Schema do Lead (name, email, phone)
├── routes/
│   └── routes.js         # Rotas da API (CRUD para leads)
├── .env                  # Variáveis de ambiente (ex: URI do MongoDB)
└── index.js              # Arquivo principal que inicializa o servidor
```

## 🧩 Endpoints implementados

| Método | Rota         | Função                             |
|--------|--------------|-------------------------------------|
| POST   | /leads       | Cria um novo lead                  |
| GET    | /leads       | Lista todos os leads               |
| GET    | /leads/:id   | Consulta um lead específico por ID |
| PATCH  | /leads/:id   | Atualiza informações de um lead    |
| DELETE | /leads/:_id  | Exclui um lead                     |

## 📂 Estrutura atual – Frontend

```
src/
├── components/
│   ├── Forms.jsx         # Componente de formulário para cadastro
│   └── Leads.jsx         # Componente para exibir os leads cadastrados
├── services/
│   └── api.js            # Configuração da API (axios ou fetch)
├── App.jsx               # Componente principal da aplicação
├── main.jsx              # Ponto de entrada da aplicação React
└── index.css             # Estilos globais
```

## 🔗 Integração com backend

O frontend se comunica com o backend via chamadas HTTP (definidas em `services/api.js`).

As ações implementadas no frontend até agora incluem:

- Criação de leads  
- Listagem de leads  
- Exclusão de leads  
- Edição (em andamento)
