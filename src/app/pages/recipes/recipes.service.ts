import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Schinitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    ingredients: ['French Fries', 'Pork meat', 'Salad']
  },
  {
    id: 'r2',
    title: 'Spaghetti',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    ingredients: ['Spaghetti', 'Meat', 'Tomato']
  }
];
  constructor() { }

  getAllRecipes(){
    console.log('getAllRecipes called');
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    console.log('getRecipe called with recipeId:', recipeId);
    return this.recipes.find(recipe => recipe.id === recipeId);
  }
}
