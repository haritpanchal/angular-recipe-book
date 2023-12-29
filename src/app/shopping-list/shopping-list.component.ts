import { Ingrediant } from './../shared/ingrediant.model';
import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingrediants : Ingrediant[];

  constructor(private shoppingService: ShoppingListService){}

  ngOnInit(){
    this.ingrediants = this.shoppingService.getIngrediants();
    this.shoppingService.ingrediantsChanged.subscribe((ingrediants:Ingrediant[]) => {
      this.ingrediants = ingrediants
    })
  }
}
