import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { locationModel } from '../models/location'

@Injectable({
  providedIn: 'root'
})
export class locationService {

  constructor(private http: HttpClient) { }

  getlocation(url?:String): Observable<any> {

    url == null?"https://rickandmortyapi.com/api/location":url;

    return this.http.get(<string> url);  
  }

  getlocationByID(id:any):Observable<locationModel>{
    return this.http.get<locationModel>('https://rickandmortyapi.com/api/location/' + id);
  }


} 
