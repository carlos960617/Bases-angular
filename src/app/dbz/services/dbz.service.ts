import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name:'Finn',
      power:400,
    },
    {
      id: uuid(),
      name:'Bubblegum',
      power:800,
    },
    {
      id: uuid(),
      name:'Lich',
      power:12000,
    }
  ];

  addCharacter( character: Character):void{

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    } // tambien se puede const newCharacter: Character = {...character, id:uuid()} se llama spread (...) y declara todas las propiedades que no esten especificadas

    this.characters.push(newCharacter); //unshift lo inserta al inicio
  }

  deleteCharacterById(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id);

}



}
