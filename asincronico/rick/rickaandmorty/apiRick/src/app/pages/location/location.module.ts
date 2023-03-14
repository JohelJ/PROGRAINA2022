import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { MaterialModule } from 'src/app/material.module';
import { DetalleLocComponent } from './detalle-loc/detalle-loc.component';


@NgModule({
  declarations: [
    LocationComponent,
    DetalleLocComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MaterialModule,
  ]
})
export class LocationModule { }
