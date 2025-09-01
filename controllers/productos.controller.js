const productoService = require('../services/productoService.');

//obtener los productos

const listarproductos=(req,res) => {
    productoService.obtenerProductos((err,productos) => {
        if (err) {
            return res.status(500).json({ error: 'error al obtener productos' });
        }
        res.json(productos);
    });
};

// obtener un producto por ID
const obtenerProductos = (req,res) => { 
    const id = req.params.id;
    productoService.obtenerProductos(id,( err,producto) => {
        if (err) {
            return res.status(500).json({error: 'error al obtener el producto' });
        }
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    });
};

