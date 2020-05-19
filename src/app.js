
require ("dotenv").config();
const express = require('express');
const cors = require ('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const path = require('path')

const app = express();
app.use(cors({}));
app.use(express.json());
app.use(routes);
app.use(errors());


const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))




















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
