import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef

  constructor(private slService: ShoppingListService){} 
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingrediant(ingName, ingAmount);
    this.slService.addIngrdiant(newIngredient);
  }


}
