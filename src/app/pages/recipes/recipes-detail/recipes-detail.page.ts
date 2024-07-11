import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe!: Recipe;
  constructor(
    private route: ActivatedRoute,
    private rcpService: RecipesService,

  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('paramMap:', paramMap);
      const recipeId = paramMap.get('recipeId');
      console.log('recipeId:', recipeId);
      if (recipeId) {
        const recipe = this.rcpService.getRecipe(recipeId);
        console.log('loaded recipe:', recipe);
        if (recipe) {
          this.loadedRecipe = recipe;
        } else {
          console.error('Recipe not found for recipeId:', recipeId);
        }
      } else {
        console.error('No recipeId found in paramMap');
        // Handle case where recipeId is not present in paramMap
      }
    });
  }
}

