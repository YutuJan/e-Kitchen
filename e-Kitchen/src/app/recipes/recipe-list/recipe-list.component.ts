import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [ new Recipe(
    'A Test Recipe', 
    'This is simply a test', 
    'https://www.healthyseasonalrecipes.com/wp-content/uploads/2018/08/fi-chickpea-salad-006-165x165.jpg') ];

  constructor() {  }

  ngOnInit() {
  }
}
