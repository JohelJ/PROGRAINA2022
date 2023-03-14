import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Episodes } from 'src/app/shared/models/episodes';
import { InfoModel } from 'src/app/shared/models/info';
import { EpisodesService } from 'src/app/shared/services/episodes.service';
import { EpisodesModule } from './episodes.module';
@Component({
  selector: 'app-locations',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent  {
  info:InfoModel;
  lista:Episodes[]=[];
  displayedColumns: string[] = ['id', 'name', 'air_date','episode', 'created'];
  dataSource = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor(private episodeSrv: EpisodesService){ }

  //  next():void{
  //    this.getEpisodes(this.info.next);
  //  }

  //  preview():void{
  //    this.getEpisodes(this.info.prev);
  //  }
  ngAfterViewInit() {
    //  this.dataSource.paginator = this.paginator;
  }

  ngOnInit():void{

   this.getEpisodes('https://rickandmortyapi.com/api/episode');
      
  };
  getEpisodes(url:string){
    this.episodeSrv.getEpisode(url).subscribe((data:any)=>{
        
      const {info,results}=data;
    
      this.lista=[];
      this.lista=[...this.lista,...results];
      this.dataSource=results;
      this.info=info;
      console.log(this.dataSource)

    }); 
  };
}

