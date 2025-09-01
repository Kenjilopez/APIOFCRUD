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

//crear un nuevo producto 

const crearProducto = (producto, callback) => {
    const { nombre, descripcion, precio, stock } = producto;
    db.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock) values (?,?,?,?)', 
        [nombre, descripcion, precio, stock],
        (err,result) => {
            if (err) return callback (err);
            callback(null, { id: result.insertId, ...producto});
        }
    );
};

// actualizar un producto

const actualizarProducto = (id,producto,callback) => {
    const { nombre, descripcion, precio, stock } = producto;
    db.query(
        'UPDATE productos set nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, descripcion, precio, stock, id],
        (err,result)=> {
            callback(err, result);
        }
    );
};

