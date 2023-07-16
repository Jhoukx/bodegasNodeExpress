import { Type, Transform, Expose } from 'class-transformer';
export class bodegas {
    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value)) return value; else throw { status: 400, message: `El dato id ${value} no coincide con los parametros` };},
        { toClassOnly:true})
    ID: number
    
    @Expose({ name: 'nombre' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El dato  nombre ${value} no coincide con los parametros` }},
        {toClassOnly:true})
    Name: string

    @Expose({ name: 'id_responsable' })
    @Transform(({ value })=> {
        if (/^[0-9]+$/.test(value)) return value; else throw { status: 400, message: `El dato responsable${value} no coincide con los parametros` };},
        { toClassOnly: true })
    IdResponsable: number
    
    @Expose({ name: 'estado' })
    @Transform(({ value }) => {
        if (/^[0-9]+$/.test(value)) return value; else throw { status: 400, message: `El parametro estado${value} no coincide con los parametros` };},
        { toClassOnly: true })
    State: number
    
    @Expose({ name: 'created_by' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El parametro created_by ${value} no coincide con los parametros` }},
        { toClassOnly: true })
    Creado_por: string

    @Expose({ name: 'update_by'})
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El parametro update_by ${value} no coincide con los parametros` }},
        { toClassOnly: true })
    Actualizado_por: string

    @Expose({ name: 'created_at' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El parametro created_at ${value} no coincide con los parametros` }},
        { toClassOnly: true })
    Creado_a: string
    
    @Expose({ name: 'updated_at' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El parametro ${value} no coincide con los parametros` }},
        { toClassOnly: true })
    Actualizado_a: string
    
    @Expose({ name: 'deleted_at' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El parametro ${value} no coincide con los parametros` }},
        { toClassOnly: true })
    Eliminado_a: string
    constructor(p1: number, p2: string,p3:number,p4:number,p5:string,p6:string,p7:string,p8:string,p9:string) {
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