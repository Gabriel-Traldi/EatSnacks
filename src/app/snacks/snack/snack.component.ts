import { Component, Input, OnInit } from '@angular/core';

import { Ingredients } from '../snack-list/ingredients/ingredients';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {
  @Input() name = '';
  @Input() snackIngredients = [];
  @Input() ingredients: Ingredients[] = [];
  selectIngredient = 0;

  price = 0.00;

  constructor() { }

  ngOnInit(): void {
    this.calcPrice();
  }

  removeIngredient(ingredient) {
    const index = this.snackIngredients.indexOf(ingredient);
    this.snackIngredients.splice(index, 1);
    this.calcPrice();
  }

  addIngredient(id) {
    if (id) {
      this.snackIngredients.push(this.ingredients.filter(ingredient => ingredient.id === id)[0]);
      this.calcPrice();
    }
    this.selectIngredient = 0;
  }

  calcPrice() {
    this.price = 0;

    let alface = false;
    let bacon = false;
    let carne = 0;
    let queijo = 0;

    this.snackIngredients.forEach(obj => {

      if (obj.description === 'Alface') {
        alface = true;
        this.price += obj.price;
      } else {
        if (obj.description === 'Bacon') {
          bacon = true;
          this.price += obj.price;
        } else {

          if (obj.description === 'Hambúrguer de carne') {
            carne++;
            if (carne === 3) {
              carne = 0;
            } else {
              this.price += obj.price;
            }
          } else {
            if (obj.description === 'Queijo') {
              queijo++;
              if (queijo === 3) {
                queijo = 0;
              } else {
                this.price += obj.price;
              }
            } else {
              this.price += obj.price;
            }
          }
        }
      }


    });

    if (alface && !bacon) {
      this.price *= 0.90;
    }
  }
}
