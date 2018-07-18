import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnackListComponent } from './snacks/snack-list/snack-list.component';
import { SnackListResolver } from './snacks/snack-list/snack-list-resolver';
import { IngredientsResolver } from './snacks/snack-list/ingredients/ingredients-resolver';

const routes: Routes = [
  {
    path: '**',
    component: SnackListComponent,
    resolve: {
      snacks: SnackListResolver,
      ingredients: IngredientsResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
