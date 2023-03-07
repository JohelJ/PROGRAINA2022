import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { MaterialModule } from 'src/app/material.module';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    DetalleComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,

  ]
})
export class PersonajesModule { }
