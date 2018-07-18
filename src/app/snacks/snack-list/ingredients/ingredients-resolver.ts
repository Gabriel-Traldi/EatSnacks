import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Ingredients } from './ingredients';
import { SnackService } from '../../snack/snack.service';

@Injectable({ providedIn: 'root' })
export class IngredientsResolver implements Resolve<Observable<Ingredients[]>> {

  constructor(private service: SnackService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredients[]> {
    return this.service.listIngredients();
  }
}
