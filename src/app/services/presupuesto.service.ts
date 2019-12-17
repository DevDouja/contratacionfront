import { Injectable, OnInit } from '@angular/core';
import { Vivienda } from '../models/vivienda';
import { EstadoService } from './estado.service';
//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService implements OnInit{

  URL = "http://localhost:8080/presupuesto"
  

  constructor(private http:HttpClient,
              private estado:EstadoService) {}

  ngOnInit(): void {}
  

  calcularPresupuesto(vivienda:Vivienda):Observable<number>{
    console.log("vivienda en PresupuestoService",vivienda);
    return this.http.post<number>(this.URL,vivienda);
  }
}
