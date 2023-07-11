import { Router } from 'express';
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

appProducto.get('/', (req, res, next) => {
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
})

export default appProducto;

