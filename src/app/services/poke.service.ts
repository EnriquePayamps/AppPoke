import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  name: string = "";

  private baseUrl: string = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) {}

  getList(page: number = 0){
    return this.http.get(`${this.baseUrl}`, {
      params: {
        offset: page,
        limit:  8
      }
    })
  } 

  getPokeData(name: string){
    return this.http.get(`${this.baseUrl}${name}`);
  }

  getPokeName(name: string){
    this.name = name;
  }  
}
