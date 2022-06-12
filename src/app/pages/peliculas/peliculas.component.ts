import { Component, OnInit } from '@angular/core';
import { PeliculasInterface } from 'src/app/models/characters.model';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  public peliculasList: PeliculasInterface[] = [];
  
  constructor(public characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getPeliculas().subscribe((data: any) => {
      const peliculasAPI: PeliculasInterface[] = data.peliculas.map((character: any) => ({
        
        id: character.id,
        titulo: character.titulo,
        caratula: character.caratula,
        year: character.year,
        director: character.director
        
        
      }));
      this.peliculasList = peliculasAPI;

    
    })
  }

}
