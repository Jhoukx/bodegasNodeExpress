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
export class bodegas {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        this.ID = p1;
        this.Name = p2;
        this.IdResponsable = p3;
        this.State = p4;
        this.Creado_por = p5;
        this.Actualizado_por = p6;
        this.Creado_a = p7;
        this.Actualizado_a = p8;
        this.Eliminado_a = p9;
    }
}
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato id: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato  nombre: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Name", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    Transform(({ value }) => {
        if (/^[0-9]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato id_responsable: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "IdResponsable", void 0);
__decorate([
    Expose({ name: 'estado' }),
    Transform(({ value }) => {
        if (/^[0-9]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro estado: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], bodegas.prototype, "State", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro created_by: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Creado_por", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro update_by: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Actualizado_por", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro created_at: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Creado_a", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro updated_at: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Actualizado_a", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El parametro deleted_at: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], bodegas.prototype, "Eliminado_a", void 0);
