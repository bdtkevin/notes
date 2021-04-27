require('dotenv').config();
const mysql = require('mysql2');
const { DB_USER, DB_PWD, DB_HOST, DB_NAME, DB_PORT, PORT } = process.env;

const db = mysql.createConnection({
  user: DB_USER,
  password: DB_PWD,
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT,
});

module.exports = {
  db,
  port: PORT,
};
