export class Vivienda{
    codigo:number;
    relacion:string;
    uso:string;
    tipo:string; //TipoVivienda
    tipoConstruccion:string;
    superficieConstruida:number;
    anyoConstruccion:Date;
    residentesHabituales:number;
    ubicacion:string;
    codigoPostal:string;
    poblacion:string;
    puertaBlindad:boolean;
    rejas:boolean;
    alarma:boolean;
    contienente:number; //a generar
    contenido:number;  //a generar
    /************************************/
    tipoVia:string;
    direccion:string;
    numeroDireccion:number; 

    /************************************/
    coberturas:string[] = [];
}