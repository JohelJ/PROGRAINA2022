import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [{ path: 'linkPersonajes', component: PersonajesComponent },
{ path: 'lista', component: ListaComponent },
{ path: 'detalle/:id', component: DetalleComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
