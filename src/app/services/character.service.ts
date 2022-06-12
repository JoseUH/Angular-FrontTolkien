import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  public charactersURL: string = "https://node-back-tolkien.vercel.app/libros"
  public peliculasURL: string = "https://node-back-tolkien.vercel.app/peliculas/"


  constructor(private httpClient: HttpClient) { }

  public getCharacters() {
    return this.httpClient.get(this.charactersURL)
  }
  
  public getCharacter(characterID: any){
    return this.httpClient.get(`https://node-back-tolkien.vercel.app/libros/${characterID}`)
  }
  public getPeliculas() {
    return this.httpClient.get(this.peliculasURL)
  }

 
}