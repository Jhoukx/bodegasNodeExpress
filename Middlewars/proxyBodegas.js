import 'reflect-metadata'
import { plainToClass } from 'class-transformer';
import { bodegas } from '../controller/bodegas.js'

export function proxyBodegas(req,res,next) {
    try {
        let classBodegas = plainToClass(bodegas, req.body);
        console.log(classBodegas);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).send()
    }
}

