import { Router} from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const appProducto = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);

// Crear la conexón
appProducto.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
})

appProducto.get('/', (req, res) => {
    con.query(
    /*sql*/`SELECT p.*, SUM(i.cantidad) AS Total
            FROM productos AS p
            INNER JOIN inventarios AS i ON p.id = i.id_producto
            GROUP BY p.id
            ORDER BY Total DESC`,
        (err, data, fils) => {
            console.log('Error:', err);
            console.log('fils:', fils);
            res.send(data);
        }
    )
});

appProducto.post('/', (req, res) => {
    //Desustructurar body de la peticion
    let { nombre, created_by, cantidad } = req.body;

    //Objeto con los datos desustructurados para la tabla Productos
    const objProductos = {
        "nombre": nombre,
        "created_by": created_by
    };

    //*Producto
    con.query(
        /*sql*/ `INSERT INTO productos SET ?`,
        objProductos,
        (err, data, fils) => {
            console.log('Error en producto\n', err);
            console.log(objProductos);
            console.log('Valores productos:\n', data);

            //*id_producto
            con.query(
                /*sql*/ `SELECT MAX(id) AS id_producto FROM productos`,
                objProductos,
                (err, data, fils) => {
                    console.log('id_producto err:\n', err);
                    let [{ id_producto }] = data;
                    console.log('id_producto:\n', data);
                    id_producto = id_producto;

                    //Objeto para insertar en tabla inventarios
                    const objInventario = {
                        "id_bodega": 52, //id de la bodega default
                        "id_producto": id_producto,
                        "cantidad": cantidad,
                        "created_by": created_by
                    };

                    //*Inventario
                    con.query(
                        /*sql*/ `INSERT INTO inventarios SET ?`,
                        objInventario,
                        (err, data, fills) => {
                            console.log('Inventario err', err);
                            console.log('valores inventario:\n', data);

                            res.send('Se enviaron los datos exitosamente :D');
                        }
                    );
                }
            );
        }
    );
});



export default appProducto;

