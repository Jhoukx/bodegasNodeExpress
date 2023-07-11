import express from 'express';
import appBodegas from './routers/bodega.js';
import appProducto from './routers/producto.js';
const appServer = express();

appServer.use(express.json());

appServer.use('/bodegas', appBodegas);
appServer.use('/productos', appProducto);

const config = JSON.parse(process.env.MYCONFIG);

appServer.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`);
});