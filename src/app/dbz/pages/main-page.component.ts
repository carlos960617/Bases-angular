import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{


  constructor( private dbzService: DbzService) {



   }

   get characters(): Character[]{
    return [...this.dbzService.characters]; //el operador spread sirve para crear una copia del servicio y no modificar la instancia original si hay cambios en dicha copia
   }

   onDeleteCharacter(id: string):void {

    this.dbzService.deleteCharacterById(id);
   }

   onNewCharacter( character: Character):void {
    this.dbzService.addCharacter(character);
   }


 /*  public characters: Character[] = [
    {
      name:'Finn',
      power:400,
    },
    {
      name:'Bubblegum',
      power:800,
    },
    {
name:'Lich',
power:12000,
    }
  ];

  onNewChracter( character: Character):void{
    this.characters.push(character); //unshift lo inserta al inicio
  }

  onDeleteCharacter(index: number):void{
    this.characters.splice(index,1);
  } */
}
