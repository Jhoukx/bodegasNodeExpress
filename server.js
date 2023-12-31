import 'reflect-metadata'
import express from 'express';
import appBodegas from './routers/bodega.js';
import appProducto from './routers/producto.js';
import appInventarios from './routers/inventario.js';
import {proxyBodegas} from './Middlewars/proxyBodegas.js'
import { proxyInventarios } from './Middlewars/proxyInventario.js'
import { proxyProductos } from './Middlewars/proxyProductos.js';
const appServer = express();

appServer.use(express.json());

appServer.use('/bodegas',proxyBodegas, appBodegas);
appServer.use('/productos',proxyProductos, appProducto);
appServer.use('/inventarios',proxyInventarios, appInventarios);

const config = JSON.parse(process.env.MYCONFIG);

appServer.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`);
});