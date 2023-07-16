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
export class inventarios {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
        this.ID = p1;
        this.ID_ROOM = p2;
        this.ID_PRODUCT = p3;
        this.AMOUNT = p4;
        this.CREATED_BY = p5;
        this.UPDATE_BY = p6;
        this.CREATED_AT = p7;
        this.UPDATE_AT = p8;
        this.DELETED_AT = p9;
    }
}
__decorate([
    Expose({ name: ' id' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "id: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'id_bodega' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "id_bodega: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_ROOM", void 0);
__decorate([
    Expose({ name: 'id_producto' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato id_producto: ${value} no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "ID_PRODUCT", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "cantidad: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "AMOUNT", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "created_by: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CREATED_BY", void 0);
__decorate([
    Expose({ name: 'update_by' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "update_by: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "UPDATE_BY", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "created_at: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "CREATED_AT", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "updated_at: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "UPDATE_AT", void 0);
__decorate([
    Expose({ name: 'deleted_at' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato "deleted_at: ${value}" no coincide con los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], inventarios.prototype, "DELETED_AT", void 0);
