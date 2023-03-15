import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from'@angular/common/http'
import { Episodes } from '../models/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http :HttpClient) { }

  getEpisode(url?:string):Observable<any>{

    url==null?"https://rickandmortyapi.com/api/episode":url;

    return this.http.get(<string>url);
  }
  getEpisodesById(id:any):Observable<Episodes>{
    return this.http.get<Episodes>('https://rickandmortyapi.com/api/episode/'+id)

  }

  
}