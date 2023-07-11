import express from 'express';
import appBodegas from './routers/bodega.js';

const appServer = express();

appServer.use(express.json());

appServer.use('/bodegas', appBodegas);

const config = JSON.parse(process.env.MYCONFIG);

appServer.listen(config, () => {
   console.log(`Server is running on http://${config.host}:${config.port}`); 
});