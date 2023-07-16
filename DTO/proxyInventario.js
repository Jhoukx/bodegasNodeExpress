import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { inventarios } from '../controller/inventarios.js' 

export function proxyInventarios(req, res, next) {
    try {
        let classInvent = plainToClass(inventarios, req.body);
        console.log(classInvent);
        next()
    } catch (error) {
        console.log(error);
        res.status(404).send()
    }
}
