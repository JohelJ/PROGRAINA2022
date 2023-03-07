import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { personajeModel } from '../models/personaje'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getPersonaje(url?:String): Observable<any> {

    url == null?"https://rickandmortyapi.com/api/character":url;

    return this.http.get(<string> url);  
  }


} 
