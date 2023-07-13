import { Router } from 'express';
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


appBodegas.post('/', (req, res) => {
    const { id_producto, id_bodega, cantidad } = req.body;

    //Verificación

    con.query(
    /*sql */ `SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?`,
        [id_producto, id_bodega],
        (err, data, fils) => {
            switch (err) {
                //*RELACIONES

                //Proceso por si no existe esa relacion 
                case null:
                    if (data.length === 0) {
                        console.log('Data is empty');
                        con.query(
                /*sql */ `INSERT INTO inventarios (id_producto,id_bodega,cantidad) VALUES (?,?,?)`,
                            [id_producto, id_bodega, cantidad],
                            (err, data, fils) => {
                                switch (err) {
                                    case null:
                                        console.log('Los datos se insertaron exitosamente');
                                        console.log('Fils:\n', fils);
                                        res.status(201).send(data);
                                        break
                                    default:
                                        console.log('Error insert inventarios:', err)
                                        res.status(505).send('A error has occurred during the insert request')
                                }
                            }
                        )
                        //Proceso si existe esa relacion
                    } else {
                        const [{ id }] = data;
                        con.query(
                        /*SQL*/ `UPDATE inventarios SET cantidad = ? WHERE id=?`,
                            [cantidad, id],
                            (err, data, fils) => {
                                switch (err) {
                                    case null:
                                        res.status(200)
                                        res.send('Los datos se actualizaron exitosamente');
                                        break
                                    default:
                                        console.log('Error update inventarios:', err);
                                        res.status(500).send('A error has occurred during the update request')
                                }
                            }
                        )
                    }
                    break
                default:
                    console.log('Error consulta inventarios:', err)
                    res.status(505).send('A error has occurred during the request')
            }


        }
    );
});


export default appBodegas;