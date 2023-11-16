import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public indexDelete: EventEmitter<string> = new EventEmitter(); //puedes ahorrarte la declaración y poner directamente new EventEmitter<number>()

@Input()
  public characterList: Character[] = [
    {
      name:'Treetrunks',
      power:420,
    }
  ]

  onDelete(index:number): void{

    this.indexDelete.emit(this.characterList[index].id);
  }

  onDeleteCharacter( index: number ):void {
    //TODO: Emitir ID del personaje
    console.log(index);
  }

}
