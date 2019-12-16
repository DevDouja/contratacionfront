import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Vivienda } from 'src/app/model/vivienda';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  vivienda:Vivienda = new Vivienda();
  constructor(private estado:EstadoService,
              private presupuestoService:PresupuestoService,) { }

  ngOnInit() {   
    this.vivienda = this.estado.vivienda;
    console.log("La vivienda en PresupuestoComponent",this.vivienda);
    this.presupuestoService.calcularPresupuesto(this.vivienda).subscribe(datos =>{
      console.log("********",datos);
      this.estado.presupuesto = datos;
      console.log(this.estado.presupuesto);
      
    });
  }

}
