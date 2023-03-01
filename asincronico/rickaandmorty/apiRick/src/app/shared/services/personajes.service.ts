import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from'@angular/common/http'
import {personaje} from '../models/personaje'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http :HttpClient) { }

  getPersonaje():Observable<personaje>{
    return this.http.get<personaje>("https://rickandmortyapi.com/api/character/2")
  }
}
