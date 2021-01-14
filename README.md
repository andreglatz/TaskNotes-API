# TaskNotes
TaskNotes é uma aplicação desenvolvida para fins de estudos, visando facilitar o dia a dia ao estabelecer notas autoadesivas virtuais. 

------------

## Instalação
A aplicação conta com diversas tecnologias em seu backend, podendo expandir conforme as necessidades.

**Tecnologias utilizadas:**
- Node.js 12.14.1
- MongoDB 4.2.0
- PostgreSQL 12

Para que a aplicação executa como o esperado é necessário obter uma conexão com os banco de dados MongoDB e um banco de dados PostgreSQL.



### NodeJS
Para a instalação do Node.js, é possível ver o passo a passo no site oficial: https://nodejs.org/


### Instalação de Dependências
Para a instalção de todas as dependências do projeto execute ` yarn install ` ou `npm install` na pasta do projeto, assim todos os comandos e dependências estarão disponíveis.


### PostgresSQL
A conexão com esse banco de dados pode acontecer tanto remoto quanto local. Dentro do diretório raiz, é possível ver um arquivo .env.examplo que inclui algumas variveis de ambiente para a configração de sua conexão.

Para realizar a conexão corretamente, em *src > Database > config*, é possível encontrar um arquivo sequelize.js (um exemplo dele), para realizar a alocação das variáveis de ambiente para a sua conexão.

Após estabelecer esses passos e com o banco de dados já criado, é necessário executar o comando:

``npx sequelize-cli db:migrate ``

Para realizar a criação da tabela no banco de dados.

Em *src > Database > Connections > Postgresql.js*, é possível definir a conexão como local ou externa em:

**LocaL:**

`` const connection = new Sequelize(dbConfig.local); ``

**Externa:**

`` const connection = new Sequelize(dbConfig.external); ``

Um serviço de hospedagem de banco de dados PostgreSQL gratuito recomendado pode ser encontrado nesse link:  https://www.elephantsql.com/


### MongoDB
Para a conexão com o MongoDB, também é possível realizar a conexão externa ou local.

Dentro do arquivo .env, é possível atribuir um endereço da conexão externa na variável `URLMONGO`.  Caso a conexão falhe ou não haja uma conexão externa, é necessário existir um banco de dados MongoDB rodando localmente, para que automaticamente seja feita a conexão local e a criação do banco e collections.

------------

## Execução da aplicação
Para que a aplicação esteja disponível para testes, é possível rodar o comando `yarn dev` ou `npm dev`, esse comando irá executar o projeto com o *nodemon* escutando os arquivos do projeto para reiniciar o servidor a cada alteração.

------------

## Rotas 
A aplicação constituí de 3 rotas principais:
- Test 
- Users 
- Tasks 


### Test 
Essa rota tem como objetivo realizar testes como: 
- Verificação se o servidor está funcionando 
- Verificação da versão da aplicação
- Verificação do funcionamento dos bancos de dados

**Rota:**
``` GET: / ```
 
 **Request:**
 > Não é necessário parâmetros e corpo
 
 **Response**: 
 ```json
{
  "API": "TaskList",
  "Version": "1.0",
  "MongoDB": 1,
  "PostgreSQL": 1
}
```


### Users 
Rota responsável por cadastro e autenticação do usuário como.

#### Cadastro
**Rota:**
``` POST: /users/register ```

**Request:**
```json
{
  "name": "André Glatz",
  "user": "andreglatz",
  "password": "5034"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOlJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgzOTU1ODU5LCJleHAiOjE1ODM5NTU4NjB9.IhjQoxZh44baMjo-oU2Jdu66Nu-7OswCH3X9_FHjAjY"
}
```

#### Login
**Rota:**
``` POST: /users/login ```

**Request:**
```json
{
	"user": "andreglatz",
	"password": "5034"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOlJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgzOTU1ODU5LCJleHAiOjE1ODM5NTU4NjB9.IhjQoxZh44baMjo-oU2Jdu66Nu-7OswCH3X9_FHjAjY"
}
```

### Tasks
Todas as rotas desse grupo necessitam de um Token Bearer no Header para validação.
Rota responsável por gerenciamento das TasksNotes como:
- Cadastro
- Leitura
- Atualização
- Exclusão

#### Cadastro
**Rota:**
``` POST: /tasks ```

**Request:**
```json
{
	"description": "Estudar para a prova"
}
```

**Response:**
```json
{
  "success": true,
  "created": {
    "_id": "5e6ab7a6a9a4ec1ec05fa280",
    "description": "Fazer compras",
    "user": 1,
    "createdAt": "2020-03-12T22:28:54.156Z",
    "updatedAt": "2020-03-12T22:28:54.156Z",
    "__v": 0
  }
}
```

#### Leitura
**Rota:**
``` GET: /tasks ```

**Request:**
> Não é necessário parâmetros e corpo

**Response:**
```json
{
  "Tasks": [
    {
      "_id": "5e694461c5ecec0c08c9c339",
      "description": "Fazer compras",
      "createdAt": "2020-03-11T20:04:49.483Z",
      "updatedAt": "2020-03-11T20:04:49.483Z",
      "__v": 0
    }
  ]
}
```

#### Atualização
``` PUT: /tasks/:taskId ```

**Request:**
```json
{
	"description": "Estudar Node.js"
}
```

**Response:**
```json
{
  "success": true,
  "updated": {
    "_id": "5e69440ca68e4839d457dadc",
    "description": "Estudar Node.js",
    "createdAt": "2020-03-11T20:03:24.916Z",
    "updatedAt": "2020-03-11T22:52:27.229Z",
    "__v": 0
  }
}
```

#### Exclusão
``` DELETE: /tasks/:taskId ```

**Request:**
> Não é necessário um corpo, somente o parâmetro da URL

**Response:**
```json
{
  "success": true,
  "updated": {
    "_id": "5e69440ca68e4839d457dadc",
    "description": "Estudar Node.js",
    "createdAt": "2020-03-11T20:03:24.916Z",
    "updatedAt": "2020-03-11T22:52:27.229Z",
    "__v": 0
  }
}
```


