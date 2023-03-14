import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) }, { path: 'location', loadChildren: () => import('./pages/location/location.module').then(m => m.LocationModule) }, { path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
