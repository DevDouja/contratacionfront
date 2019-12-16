import { Injectable, OnInit } from '@angular/core';
import { Vivienda } from '../model/vivienda';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class EstadoService implements OnInit {
 
vivienda:Vivienda = new Vivienda();
tomador:Persona;
/*¿El tomador es el mismo que el asegurado?
si: no creamos el asegurado
sino: lo creamos*/
asegurado:Persona;
/*datos generales*/
seguroActual:boolean;
empresaSeguroActual:string;
fechafinalizacionSeguroActual:boolean;
codigoPresupuesto:string;
primaAnual:number;
primaSemestral:number;
fechaEfecto:Date;
codigoPromocional:number;
coberturas:string[];
coincidenciaDireccion:boolean;
coincidenciaTomador:boolean;
hipotica:boolean;
paisCuenta:string;
numeroCuenta:string; //IBAN
presupuesto:number;


constructor() {
  this.vivienda = new Vivienda();
  this.coberturas = [];
  this.vivienda.codigo = 102;
  this.vivienda.relacion = "propietario";
  this.vivienda.uso = "habitual";
  this.vivienda.tipo = "pisoBajo";
  this.vivienda.tipoConstruccion = "vigasMadera";
  this.vivienda.superficieConstruida = 95;
  this.vivienda.anyoConstruccion = new Date(2009,5,11);
  this.vivienda.residentesHabituales = 2;
  this.vivienda.ubicacion = "urbano";
  this.vivienda.puertaBlindad = true;
  this.vivienda.rejas = true;
  this.vivienda.alarma = false;
  this.vivienda.contienente = 20000;
  this.vivienda.contenido = 10000;
  this.vivienda.codigoPostal = "08225";

  /******Coberturas******/
  this.coberturas.push("Robo");
  this.coberturas.push("danyoAgua");
  this.coberturas.push("riesgoAccidental");
  this.coberturas.push("asistencia");
  
  this.vivienda.coberturas = this.coberturas;
  console.log("vivienda en el estado", this.vivienda);
 }
  
ngOnInit(): void {}
}
