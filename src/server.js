require('dotenv').config();
require('./Database/Connections/Postgresql');
const middleware = require('./middleware/auth');
const jwt = require('jsonwebtoken');

const express = require('express');
const bodyParser = require('body-parser');

const routerTodo = require('./Routes/routesTodo');
const routerAuth = require('./Routes/routesAuth');
const routerTest = require('./Routes/routesTest');

const app = express();

app.use(bodyParser.json());

app.use(routerTest);
app.use(routerAuth);

app.use(middleware);

app.use(routerTodo);


app.listen(process.env.PORT, () => console.log('Escutando na porta ' + process.env.PORT));