var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from 'class-transformer';
export class productos {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        this.ID = p1;
        this.NAME = p2;
        this.DESCRIPTION = p3;
        this.STATE = p4;
        this.CREADO_POR = p5;
        this.ACTUALIZADO_POR = p6;
        this.CREADO_A = p7;
        this.ACTUALIZADO_A = p8;
        this.ELIMINADO_A = p9;
    }
}
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato id: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato nombre: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "NAME", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato descripcion: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "DESCRIPTION", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato estado: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "STATE", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato created_by: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "CREADO_POR", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato update_by: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], productos.prototype, "ACTUALIZADO_POR", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato created_at: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "CREADO_A", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato updated_at: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "ACTUALIZADO_A", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato deleted_at: "${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], productos.prototype, "ELIMINADO_A", void 0);
