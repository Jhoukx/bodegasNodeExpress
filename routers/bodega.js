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

appBodegas.get('/', (req, res) => {
    console.log(req.query);
    console.log('>:)');
    res.send();
});

export default appBodegas;