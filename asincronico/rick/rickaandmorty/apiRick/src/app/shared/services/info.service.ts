import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { personajeModel } from '../models/personaje'

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

    getInfo(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }


}