## Leads Form 

Este projeto é uma aplicação simples de gerenciamento de leads, desenvolvida com Node.js, Express e MongoDB no backend, e JavaScript (ESM) com React no frontend.

No backend, é possível criar, listar, atualizar, consultar por ID e excluir leads armazenados em um banco de dados MongoDB.
No frontend, a aplicação permite criar, listar e excluir leads cadastrados, com uma interface desenvolvida com React, Axios para requisições HTTP e TailwindCSS para estilização.

⚠️ Status: Em desenvolvimento – ainda não finalizado.

### 🚀 Tecnologias utilizadas

- Node.js

- Express.js

- MongoDB (via Mongoose)

- JavaScript ES Modules

- React

- Axios

- TailwindCSS

### 📦 Pré-requisitos para rodar o projeto
Certifique-se de ter os seguintes itens instalados:

- Node.js

- MongoDB

- Git (opcional, para clonar o projeto

⚙️ Como rodar o projeto:
#### Backend

Acesse a pasta do backend:

- cd backend
- 
Instale as dependências:

- npm install

Crie um arquivo .env com a seguinte variável (ajuste conforme sua conexão):

MONGODB_URI=mongodb://localhost:27017/leadsdb

Inicie o servidor:

- npm run 

O servidor será iniciado em http://localhost:3000 (ou conforme configurado).

#### Frontend
Acesse a pasta do frontend:

- cd frontend

Instale as dependências:

- npm install

Inicie a aplicação React:

- npm run dev
  
A aplicação estará disponível em http://localhost:5173 (ou outra porta indicada pelo Vite).

### 📂 Estrutura atual – Backend

A pasta src do backend está organizada da seguinte forma:

src/
│
├── database/
│   └── config.js         # Conexão com o MongoDB
│
├── models/
│   └── model.js          # Schema do Lead (name, email, phone)
│
├── routes/
│   └── routes.js         # Rotas da API (CRUD para leads)
│
├── .env                  # Variáveis de ambiente (ex: URI do MongoDB)
├── index.js              # Arquivo principal que inicializa o servidor

### 🧩 Endpoints implementados
Método	Rota	Função
POST	/leads	Cria um novo lead
GET	/leads	Lista todos os leads
GET	/leads/:id	Consulta um lead específico por ID
PATCH	/leads/:id	Atualiza informações de um lead
DELETE	/leads/:_id	Exclui um lead

### 📂 Estrutura atual – Frontend

src/
│
├── components/
│   ├── Forms.jsx         # Componente de formulário para cadastro
│   └── Leads.jsx         # Componente para exibir os leads cadastrados
│
├── services/
│   └── api.js            # Configuração da API (axios ou fetch)
│
├── App.jsx               # Componente principal da aplicação
├── main.jsx              # Ponto de entrada da aplicação React
├── index.css             # Estilos globais

### 🔗 Integração com backend
O frontend se comunica com o backend via chamadas HTTP (definidas em services/api.js).

As ações implementadas no frontend até agora incluem:

- Criação de leads

- Listagem de leads

- Exclusão de leads

- Edição (em andamento)
