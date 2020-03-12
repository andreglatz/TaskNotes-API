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

#### NodeJS
Para a instalação do Node.js, é possível ver o passo a passo no site oficial: https://nodejs.org/

#### PostgresSQL
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

#### MongoDB
Para a conexão com o MongoDB, também é possível realizar a conexão externa ou local.

Dentro do arquivo .env, é possível atribuir um endereço da conexão externa na variável `URLMONGO`.  Caso a conexão falhe ou não haja uma conexão externa, é necessário existir um banco de dados MongoDB rodando localmente, para que automaticamente seja feita a conexão local e a criação do banco e collections.
