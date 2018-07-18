import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Snack } from '../../snack/snack';
import { Ingredients } from '../ingredients/ingredients';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnChanges {

  @Input() snacks: Snack[] = [];
  @Input() ingredients: Ingredients[] = [];
  rows = [];

  constructor() {  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.snacks) {
      this.rows = this.groupColumns(this.snacks);
    }
  }

  groupColumns(snacks: Snack[]) {
    const newRows = [];

    for (let index = 0; index < snacks.length; index += 3) {
      newRows.push(snacks.slice(index, index + 3));
    }
    return newRows;
  }

}
