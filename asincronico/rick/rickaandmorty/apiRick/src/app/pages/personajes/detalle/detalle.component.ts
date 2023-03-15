import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Episodes } from 'src/app/shared/models/episodes';
import { personajeModel } from 'src/app/shared/models/personaje';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { locationService } from 'src/app/shared/services/location.service';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { EpisodesModule } from '../../episodes/episodes.module';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
id:number=0;
personaje:personajeModel;
episodios: String[]=['id', 'name', 'air_date', 'episode','created'];
aux: string[]=[];


  constructor(route:ActivatedRoute, srv:PersonajesService, epSrv:EpisodesService){


    
    const id= route.snapshot.paramMap.get('id');

    srv.getPersonajeByID(id).subscribe((result:any)=>{
     
      const{episode}=result;

      this.personaje=result;
      this.personaje.episode=episode;
      console.log(this.personaje.episode);
    });


  
  }

  getEpisodios(episode:any){
    let link =  episode.split("sode/")
    let linkEpisodio = link[1];
   
    return linkEpisodio
      
  };

  

 

  }


