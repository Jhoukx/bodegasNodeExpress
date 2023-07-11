import { Router } from "express";
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const appBodegas = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);

appBodegas.use((req, res, next) => {
    con = mysql.createPool(config);
    next();
});

/**
 ** Veficiar datos del Query para la consulta
 * @consultaGeneral {http://127.0.15.1:5005/bodegas}
 * @consultaFiltrada {http://127.0.15.1:5005/bodegas?_sort=nombre&_order=desc}
 */
appBodegas.get('/', (req, res) => {
    const query = req.query;
    switch (Object.keys(query).length) {
        case 0:
            con.query(
                `SELECT * FROM bodegas`,
                (err, data, fils) => {
                    console.log(err);
                    console.log(data);
                    res.send(data);
                }
            );
            break
        default:
            con.query(
                `SELECT * FROM bodegas ORDER BY ${query._sort} ${query._order}`,
                (err, data, fils) => {
                    console.log(err);
                    console.log(data);
                    res.send(data);
                }
            )
    }
});

/**
 * Datos de entrada principales
 * @param {nombre}
 * @param {id_responsable} 
 * @param {estado} 
 * @param {created_by} 
 *  
 */
appBodegas.post('/', (req, res) => {
    con.query(
        /*SQL*/ `INSERT INTO bodegas SET ?`,
        req.body,
        (err, data, fils) => {
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send('Se agregó exitosamente :D');
        }
    );
});
export default appBodegas;