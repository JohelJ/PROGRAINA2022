import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { locationModel } from 'src/app/shared/models/location';
import { InfoModel } from 'src/app/shared/models/info';
import { locationService } from 'src/app/shared/services/location.service';
import { InfoService } from 'src/app/shared/services/info.service';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
@Component({
  selector: 'app-detalle-loc',
  templateUrl: './detalle-loc.component.html',
  styleUrls: ['./detalle-loc.component.css']
})
export class DetalleLocComponent {
  id:number=0;
  personaje:locationModel;
    constructor(route:ActivatedRoute, srv:locationService){
  
      const id= route.snapshot.paramMap.get('id');
  
      srv.getlocationByID(id).subscribe((result:any)=>{
        this.personaje=result;
        console.log(result)
      });
  
    }
  
    ngOnInit():void{}
  
}
