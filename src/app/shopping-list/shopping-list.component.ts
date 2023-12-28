import { Ingrediant } from './../shared/ingrediant.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingrediants : Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10)
  ];

  onIngredientAdded(ingrediant: Ingrediant){
    this.ingrediants.push(ingrediant);
  }
}
