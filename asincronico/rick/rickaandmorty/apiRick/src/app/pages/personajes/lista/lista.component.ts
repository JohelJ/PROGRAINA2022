import { Component } from '@angular/core';
import { InfoModel } from 'src/app/shared/models/info';
import { personajeModel } from 'src/app/shared/models/personaje';
import { InfoService } from 'src/app/shared/services/info.service';
import { PersonajesService } from 'src/app/shared/services/personajes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  lista: personajeModel[] = []
  info: InfoModel;

  constructor(private personajeSrv: PersonajesService, private InfoSrv: InfoService) {



  }

  next(): void {
    this.getPersonajes(this.info.next)

  }

  prev(): void {
    this.getPersonajes(this.info.prev)
  }

  ngOnInit(): void {
    this.getPersonajes('https://rickandmortyapi.com/api/character');


  }


  getPersonajes(url?: String) {
    this.personajeSrv.getPersonaje(url).subscribe((data: any) => {
      this.lista=[]
      const { results, info } = data;
      this.lista=[...this.lista,...results];
      this.info = info
      console.log(this.lista)




    });

  }
}
