import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { personajeModel } from 'src/app/shared/models/personaje';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
id:number=0;
personaje:personajeModel;
  constructor(route:ActivatedRoute, srv:PersonajesService){

    const id= route.snapshot.paramMap.get('id');

    srv.getPersonajeByID(id).subscribe((result:any)=>{
      this.personaje=result;
      console.log(result)
    });

  }

  ngOnInit():void{}

}
