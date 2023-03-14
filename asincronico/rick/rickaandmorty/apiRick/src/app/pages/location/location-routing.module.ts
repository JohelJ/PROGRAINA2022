import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLocComponent } from './detalle-loc/detalle-loc.component';
import { LocationComponent } from './location.component';

const routes: Routes = [{ path: 'locationLink', component: LocationComponent},{ path: 'detalle/:id', component: DetalleLocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
