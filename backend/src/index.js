const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const app = express();
app.use(cors(
    // { origin: 'http://meuapp.com'}
    ));
app.use(express.json());
app.use(routes);
app.listen(3333);
// METODOS HTTP
// GET: BUSCA
// POST: CRIA
// PUT: ALTERA
// DELETE: DELETA
//////////////////
// METODOS DE DB
// SQL: MYSQL
// NoSQL: MongoDB
///////////////////
/**
 * Drives: SELECT 8 FRON users
 * Query Builder: table('users').select('*').were()
 */


