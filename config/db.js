const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'tienda',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;