import 'reflect-metadata'
import { plainToClass } from 'class-transformer';
import express from 'express';
import { bodegas } from './controller/bodegas.js'
import appBodegas from './routers/bodega.js';
import appProducto from './routers/producto.js';
import appInventarios from './routers/inventario.js';
const appServer = express();

appServer.use(express.json());

appServer.use('/bodegas', (req, res) => {
   try {
      let classBodegas = plainToClass(bodegas, req.body);
      console.log(classBodegas);
      res.send()
   } catch (error) {
      console.log(error);
      res.status(404).send()
   }
});
appServer.use('/productos', appProducto);
appServer.use('/inventarios', appInventarios);

const config = JSON.parse(process.env.MYCONFIG);

appServer.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`);
});