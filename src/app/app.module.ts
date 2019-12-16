import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms'; 
import { HttpClientModule }     from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { EstadoService } from './services/estado.service';
import { PresupuestoService } from './services/presupuesto.service';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EstadoService,
    PresupuestoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
