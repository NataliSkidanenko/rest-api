const {Pool} = require('pg');

const db = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: '5432',
  database: 'rest_api',
});

module.exports = db;
