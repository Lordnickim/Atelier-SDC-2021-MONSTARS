import { Knex } from "knex";

const connection = 'localhost:3000';

const db: Knex = require('knex')({
  client: 'pg',
  connection: {
    host: connection,
    user: 'postgres',
    password: '',
    database: 'atelier',
  },
});

module.exports = db;
