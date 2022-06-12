import { CharacterInterface } from 'src/app/models/characters.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.scss']
})
export class CharactercardComponent implements OnInit {
@Input() public character!: CharacterInterface;
  constructor() { }

  ngOnInit(): void {
  }

}