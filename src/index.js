

app.listen(process.env.PORT || 3333);

require("dotenv").config();

const express = require('express');
const cors = require ('cors');
const {errors} = require('celebrate');
 app.use(routes);
app.use(errors());


app.listen(process.env.PORT || 3000);


























/**
 * Rota / Recurso
 */
/**
 * Metodos HTTP:
 * 
 * Get: Buscar uma informação no back-en
 * Post: Cria uma informação no back-end
 * Put: Altera uma informação no back-end
 * Delete: Deletar uma informação no back-end
 */
/**http:localhost:3333/users */

/**
 * Tipos de parâmetros
 * 
 * Query: são parâmetros enviados na rota após o "?"(Filtros, Paginação)
 * Route Params: Parâmetros utilizados para indentificar recursos
 * Request Body: 
 */

 /**
  * SLQ: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
  * NoSQL: MongoDB, CouchDB, etc
  */
