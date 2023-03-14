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
aux: Episodes[];

  constructor(route:ActivatedRoute, srv:PersonajesService, epSrv:EpisodesService){


    
    const id= route.snapshot.paramMap.get('id');

    srv.getPersonajeByID(id).subscribe((result:any)=>{
      this.personaje=result;
      console.log(result)
    });


  
  }

  


  

  ngOnInit():void{}

  // getEpisodios(url?:String):{
  //   this.epSrv.getPersonaje(url).subscribe((data:any)=>{
  //     const {results, info}=data;
  //     this.dataSource=results;
  //     this.lis=info
      
  //     console.log(this.lis)
      
      
  //         });

  }


