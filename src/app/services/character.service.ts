import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  public charactersURL: string = "https://backtolkien.vercel.app/libros"
  public peliculasURL: string = "https://backtolkien.vercel.app/peliculas/"


  constructor(private httpClient: HttpClient) { }

  public getCharacters() {
    return this.httpClient.get(this.charactersURL)
  }
  
  public getCharacter(characterID: any){
    return this.httpClient.get(`https://backtolkien.vercel.app/libros/${characterID}`)
  }
  public getPeliculas() {
    return this.httpClient.get(this.peliculasURL)
  }

 
}