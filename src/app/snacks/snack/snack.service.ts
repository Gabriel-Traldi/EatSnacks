import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Snack } from './snack';
import { Ingredients } from '../snack-list/ingredients/ingredients';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class SnackService {
  constructor(private http: HttpClient) { }

  listSnacks() {
    return this.http
      .get<Snack[]>(API + '/snacks');
  }

  listIngredients() {
    return this.http
      .get<Ingredients[]>(API + '/ingredients');
  }
}
