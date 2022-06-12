import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/models/characters.model';
import { CharacterService } from 'src/app/services/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characterList: CharacterInterface[] = [];
  
  constructor(public characterService: CharacterService) { }


  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      const charactersAPI: CharacterInterface[] = data.libros.map((character: any) => ({
        
    
        id: character.id,
        titulo: character.titulo,
        year: character.titulo,
        autor: character.autor,
        portada: character.portada
        
      
        
      }));
      this.characterList = charactersAPI;

    
    })
  }

}
