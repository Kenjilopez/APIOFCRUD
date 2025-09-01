const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',       // ← Cambia esto por tu usuario de MySQL
  password: 'root123', // ← Cambia esto por tu contraseña
  database: 'tienda',        // ← Asegúrate de que esta base exista
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;