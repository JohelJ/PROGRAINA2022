import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { Episodes } from 'src/app/shared/models/episodes';
@Component({
  selector: 'app-detalle-episode',
  templateUrl: './detalle-episode.component.html',
  styleUrls: ['./detalle-episode.component.css']
})
export class DetalleEpisodeComponent {
  episodes: Episodes;
 
  constructor(route:ActivatedRoute ,srv:EpisodesService){

    const id= route.snapshot.paramMap.get('id');
    
    srv.getEpisodesById(id).subscribe((epi:any)=>{
      this.episodes=epi;
      console.log(this.episodes);
    })
  }
}
