import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantsChanged = new EventEmitter<Ingrediant[]>();
  
  private ingrediants : Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10)
  ];

  getIngrediants(){
    return this.ingrediants.slice()
  }

  addIngrdiant(ingrediant: Ingrediant){
    this.ingrediants.push(ingrediant)
    this.ingrediantsChanged.emit(this.ingrediants.slice())
  }

  addIngrdiants(ingrdiants:Ingrediant[]){
    // for(let ingrdiant of ingrdiants){
    //   this.addIngrdiant(ingrdiant)
    // }
    this.ingrediants.push(...ingrdiants);
    this.ingrediantsChanged.emit(this.ingrediants.slice())
  }

  constructor() { }
}
