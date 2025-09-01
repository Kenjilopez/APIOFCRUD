const { config } = require("dotenv");
const db = require("../config/db");

// obtener todos los productos
const obtenerProductos = (callback) => {
    db.query('SELECT * FROM productos', (err, results) => {
    callback (err,results [0]);
    });
};

//obtener productos por ID

const obtenerProductosPorID = (id ,callback) => {
     db.query('SELECT * FROM productos WHERE = ?', [id], (er,results) => {
        callback (err,results [0]);
    });
};