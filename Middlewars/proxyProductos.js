import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { productos } from '../controller/productos.js'

export function proxyProductos(req,res,next) {
    try {
        let classProductos = plainToClass(productos, req.body);
        console.log('*ProxyProductos*');
        console.log(classProductos);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).send()   
    }
}