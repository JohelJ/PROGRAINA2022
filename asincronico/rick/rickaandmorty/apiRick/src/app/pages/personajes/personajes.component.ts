import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/shared/services/personajes.service';
import { PersonajesModule } from './personajes.module';
import { personajeModel } from 'src/app/shared/models/personaje';
import {MatPaginator} from '@angular/material/paginator';
import { InfoService } from 'src/app/shared/services/info.service';
import { InfoModel } from 'src/app/shared/models/info';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, AfterViewInit {
  

  lista:personajeModel[]=[];
  lis:InfoModel;



  pj: string[] = ['id','name','status','species','type','gender','image','created'];
  dataSource = new MatTableDataSource<personajeModel>([]);



  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  ngAfterViewInit() {
  //this.dataSource.paginator = this.paginator;
  }



  constructor(private personajeSrv: PersonajesService, private InfoSrv: InfoService){

    

  }

  next():void{
    this.getPersonajes(this.lis.next)

  }

  prev():void{
    this.getPersonajes(this.lis.prev)
  }

  ngOnInit():void{
    this.getPersonajes('https://rickandmortyapi.com/api/character');

   
  }


  getPersonajes(url?:String){
    this.personajeSrv.getPersonaje(url).subscribe((data:any)=>{
      const {results, info}=data;
      this.dataSource=results;
      this.lis=info
      
      console.log(this.lis)
      
      
          });

  }




  

}
