import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test reciper', 'lorem ipsum', 'data:image/jpeg;base64,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'),
    new Recipe('Test reciper', 'lorem ipsum', 'data:image/jpeg;base64,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')
  ]
}