import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { Snack } from '../snack/snack';
import { SnackService } from '../snack/snack.service';
import { Ingredients } from './ingredients/ingredients';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit, OnDestroy {

  snacks: Snack[] = [];
  ingredients: Ingredients[] = [];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  snack: Snack = {description: '', name: 'Novo Lanche', ingredients: [], price: 0};

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.snacks = this.activatedRoute.snapshot.data.snacks;
    this.snacks.push(this.snack);
    this.ingredients = this.activatedRoute.snapshot.data.ingredients;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
