import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { InfoModel } from 'src/app/shared/models/info';
import { MatTableDataSource } from '@angular/material/table';
import { locationModel } from 'src/app/shared/models/location';
import { locationService } from 'src/app/shared/services/location.service';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterViewInit {
  
  arr:locationModel[]=[];
  lis:InfoModel;
  lista:locationModel[]=[];
  loca: string[] = ['id','name','type','dimension','created','actions'];
  dataSource =new MatTableDataSource<locationModel>([]);



  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  ngAfterViewInit() {
  //this.dataSource.paginator = this.paginator;
  }



  constructor(private locationSrv: locationService){

    

  }

   next():void{
     this.getlocation(this.lis.next)

   }

   prev():void{
     this.getlocation(this.lis.prev)
   }

  ngOnInit():void{
    this.getlocation('https://rickandmortyapi.com/api/location');

   
  }


  getlocation(url?:String){
    this.locationSrv.getlocation(url).subscribe((data:any)=>{
      const {results, info}=data;
      this.dataSource=results;
      this.lista=[];
      this.lista=[...this.lista,...results]

      this.lis=info;
      console.log(this.dataSource)
      
      
          });

  }




}
