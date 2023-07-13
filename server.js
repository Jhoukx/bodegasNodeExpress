import express from 'express';
import appBodegas from './routers/bodega.js';
import appProducto from './routers/producto.js';
import appInventarios from './routers/inventario.js';
const appServer = express();

appServer.use(express.json());

appServer.use('/bodegas', appBodegas);
appServer.use('/productos', appProducto);
appServer.use('/inventarios', appInventarios);

const config = JSON.parse(process.env.MYCONFIG);

appServer.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`);
});